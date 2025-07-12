'use client';
import { useEffect, useState, useRef } from 'react';
import { exampleMemory, MemorySchema } from './schema';
import BottomSheet from './bottomSheet';
import { useUploadStore } from '@/store/useUploadStore';
import { useRouter } from 'next/navigation';

export default function MapContainer({ address }: { address?: string }) {
  const [popSheet, setPopSheet] = useState(false);
  const [re, setRe] = useState<number[] | null>(null);
  const [pieces, setPieces] = useState<MemorySchema[]>(exampleMemory);
  const router = useRouter();
  const { isUploadMode } = useUploadStore();
  const uploadModeRef = useRef(isUploadMode);
  const mapRef = useRef<naver.maps.Map | null>(null);

  useEffect(() => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5666805, 126.9784147),
      zoom: 15,
    });

    const checkAndInit = () => {
      if (!naver || !naver.maps || !naver.maps.Service) {
        console.warn('naver.maps.Service is not fully ready yet! Retrying...');
        setTimeout(checkAndInit, 300);
        return;
      }

      tryMapInit();
    };

    const tryMapInit = () => {
      mapRef.current = map;

      const initGeolocation = () => {
        const onSuccessGeolocation = (position: GeolocationPosition) => {
          const location = new naver.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          );

          map.setCenter(location);
          map.setZoom(16);

          console.log('Geolocation successful:', position);
        };

        const onErrorGeolocation = () => {
          const center = map.getCenter();
          console.warn('Geolocation failed, using default center:', center);
        };

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            onSuccessGeolocation,
            onErrorGeolocation
          );
        }
        setPopSheet(false);
      };
      initGeolocation();

      const grouped = exampleMemory.reduce<Record<string, MemorySchema[]>>(
        (acc, mem) => {
          const key = `${mem.coordinates.x},${mem.coordinates.y}`;
          if (!acc[key]) acc[key] = [];
          acc[key].push(mem);
          return acc;
        },
        {}
      );

      Object.entries(grouped).forEach(([key, memories]) => {
        const { x, y } = memories[0].coordinates;

        const marker = new naver.maps.Marker({
          position: new naver.maps.LatLng(x, y),
          map: map,
          title: `${memories.length} memories`,
          icon: {
            content: [
              '<img src="/images/marker.png" alt="marker" ' +
                'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
                '-webkit-user-select: none; width: 33px; height: 59px; left: 0px; top: 0px;"></img>',
              '<div class="relative ml-[50%]">',
              '<div class="flex flex-col items-center -translate-x-1/2 absolute text-[12px] text-shadow max-w-[120px] min-w-[70px] break-words break-keep text-center">',
              `<div class="absolute text-shadow rounded-[15px]">${memories.length}개의 기억</div>`,
              '</div>',
              '</div>',
              ,
            ].join(''),
            size: new naver.maps.Size(33, 59),
            anchor: new naver.maps.Point(17, 59),
          },
        });

        naver.maps.Event.addListener(marker, 'click', () => {
          console.log(`Marker clicked at ${key}`);
          console.log('Memories at this location:', memories);
          setPieces(memories); // Update the pieces state with memories at this location
          setPopSheet(true);
        });
      });

      interface NaverMapMouseEvent {
        coord: naver.maps.LatLng;
        point: naver.maps.Point;
        domEvent: MouseEvent;
      }

      naver.maps.Event.addListener(map, 'click', (e: NaverMapMouseEvent) => {
        console.log('Map clicked at:', e.coord);
        setPopSheet(false);
        // console.log(isUploadMode);
        if (uploadModeRef.current) {
          if (confirm('이 위치에 업로드 하시겠습니까?')) {
            const lat = e.coord.y;
            const lng = e.coord.x;
            router.push(`/upload?lat=${lat}&lng=${lng}`);
          }
        }
      });

      naver.maps.Event.once(map, 'init', () => {
        const html = `
          <a href="#" class="flex justify-center items-center bg-white p-[1rem] rounded-full m-[1.5rem] active:bg-gray-300 box-shadow">
            <img src="/images/point.png"></img>
          </a>`;
        console.log('Map initialized successfully');
        const locationControl = new naver.maps.CustomControl(html, {
          position: naver.maps.Position.RIGHT_BOTTOM,
        });

        locationControl.setMap(map);

        naver.maps.Event.addDOMListener(
          locationControl.getElement(),
          'click',
          () => {
            console.log('Location control clicked');
            initGeolocation();
          }
        );
      });
    };

    checkAndInit();
  }, []);

  useEffect(() => {
    if (!address || !mapRef.current) return;

    naver.maps.Service.geocode({ query: address }, function (status, response) {
      if (status !== naver.maps.Service.Status.OK) {
        console.error('Geocode error:', response);
        return;
      }

      const result = response.v2;
      const items = result.addresses;

      if (items.length === 0) {
        console.warn('No results found for the address:', address);
        return;
      }

      const remap = new naver.maps.LatLng(
        Number(items[0].y),
        Number(items[0].x)
      );
      mapRef.current!.setCenter(remap);
    });
  }, [address]);

  useEffect(() => {
    uploadModeRef.current = isUploadMode;
  }, [isUploadMode]);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[100vh]">
        <div
          id="map"
          className="w-full"
          style={{ height: 'calc(100% - 7.9rem)' }}
        ></div>
      </div>
      {popSheet && <BottomSheet arr={pieces} />}
    </>
  );
}
