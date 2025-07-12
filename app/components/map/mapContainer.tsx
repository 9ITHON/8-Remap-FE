'use client';
import { useEffect } from 'react';

export default function MapContainer({
  coordinates: { x, y },
}: {
  coordinates: { x: number; y: number };
}) {
  const initMap = (placename: string) => {
    const map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(x - 0.01, y),
      zoom: 15,
    });

    const marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(x, y),
      map: map,
      icon: {
        content: [
          '<img src="https://map.pstatic.net/resource/api/v2/image/maps/selected-marker/default@1x.png?version=16" alt="마커 이미지" ' +
            'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
            '-webkit-user-select: none; width: 46px; height: 59px; left: 0px; top: 0px;"></img>',
          '<div class="relative ml-[50%]">',
          '<div class="flex flex-col items-center -translate-x-1/2 absolute text-[12px] text-shadow max-w-[120px] min-w-[70px] break-words break-keep text-center">',
          `<div class="absolute text-shadow rounded-[15px]">${placename}</div>`,
          '</div>',
          '</div>',
        ].join(''),
        size: new naver.maps.Size(46, 59),
        anchor: new naver.maps.Point(23, 59),
      },
    });
  };

  useEffect(() => {
    const checkAndInit = () => {
      if (!naver || !naver.maps || !naver.maps.Service) {
        console.warn('naver.maps.Service is not fully ready yet! Retrying...');
        setTimeout(checkAndInit, 300);
        return;
      }

      if (!x || !y) {
        console.error('Coordinates are not provided:', { x, y });
        return;
      }

      tryGeocode();
    };

    const tryGeocode = (retryCount = 0) => {
      if (retryCount > 3) {
        console.error('Geocode failed after multiple retries.');
        return;
      }

      naver.maps.Service.reverseGeocode(
        { coords: new naver.maps.LatLng(37.3595316, 127.1052133) },
        function (status, response) {
          if (status !== naver.maps.Service.Status.OK) {
            console.error('Geocode error:', response, 'Retrying...');
            setTimeout(() => tryGeocode(retryCount + 1), 500);
            return;
          }

          const result = response.v2;
          const items = result.results;
          const address = result.address;

          console.log('Geocode successful:', items, address);
          initMap(address.jibunAddress || address.roadAddress);
        }
      );
    };

    checkAndInit();
  }, []);

  return (
    x &&
    y && (
      <>
        <div className="absolute top-0 left-0 right-0 h-[100vh]">
          <div
            id="map"
            className="w-full h-[100vh]"
          ></div>
        </div>
      </>
    )
  );
}
