'use client';
import { useEffect, useState } from 'react';

import { exampleMemory } from './schema';

export default function MapContainer() {
  const [title, setTitle] = useState('');
  const [userName, setUserName] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const checkAndInit = () => {
      if (!naver || !naver.maps || !naver.maps.Service) {
        console.warn('naver.maps.Service is not fully ready yet! Retrying...');
        setTimeout(checkAndInit, 300);
        return;
      }

      tryMapInit();
    };

    const tryMapInit = () => {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.5666805, 126.9784147),
        zoom: 15,
      });

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
      };
      initGeolocation();

      exampleMemory.map(
        ({ id, title, userName, coordinates, createdAt, isPublic }) => {
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(coordinates.x, coordinates.y),
            map: map,
            title: `${title} by ${userName}`,
            icon: {
              content: [
                '<img src="/images/marker.png" alt="marker" ' +
                  'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
                  '-webkit-user-select: none; width: 33px; height: 59px; left: 0px; top: 0px;"></img>',
                '<div class="relative ml-[50%]">',
                '<div class="flex flex-col items-center -translate-x-1/2 absolute text-[12px] text-shadow max-w-[120px] min-w-[70px] break-words break-keep text-center">',
                `<div class="absolute text-shadow rounded-[15px]">${title}</div>`,
                '</div>',
                '</div>',
              ].join(''),
              size: new naver.maps.Size(33, 59),
              anchor: new naver.maps.Point(17, 59),
            },
          });

          if (isPublic) {
            console.log(`Public memory added: ${title}`);
          }

          naver.maps.Event.addListener(marker, 'click', () => {
            console.log(`Marker clicked: ${id} - ${title}`);
          });
        }
      );

      naver.maps.Event.once(map, 'init', () => {
        const html = `
          <a href="#" class="flex justify-center items-center bg-white p-[1rem] rounded-full m-[1.5rem] active:bg-gray-300">
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

    // const tryGeocode = (retryCount = 0) => {
    //   if (retryCount > 3) {
    //     console.error('Geocode failed after multiple retries.');
    //     return;
    //   }

    //   naver.maps.Service.reverseGeocode(
    //     { coords: new naver.maps.LatLng(37.3595316, 127.1052133) },
    //     function (status, response) {
    //       if (status !== naver.maps.Service.Status.OK) {
    //         console.error('Geocode error:', response, 'Retrying...');
    //         setTimeout(() => tryGeocode(retryCount + 1), 500);
    //         return;
    //       }

    //       const result = response.v2;
    //       const items = result.results;
    //       const address = result.address;

    //       console.log('Geocode successful:', items, address);
    //       initMap(address.jibunAddress || address.roadAddress);
    //     }
    //   );
    // };

    checkAndInit();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[100vh]">
        <div
          id="map"
          className="w-full"
          style={{ height: 'calc(100% - 7.9rem)' }}
        ></div>
      </div>
    </>
  );
}
