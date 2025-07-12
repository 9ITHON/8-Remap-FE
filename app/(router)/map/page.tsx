'use client';

import { useState } from 'react';
import Container from 'components/Container';
import MapContainer from 'components/map/mapContainer';
import Search from '@/public/svg/search.svg';
import SVG from 'components/SVG';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const [address, setAddress] = useState('');

  const handleSearch = () => {
    console.log('Search button clicked with query:', searchQuery);
    setAddress(searchQuery); // 버튼 클릭 시 실제 주소 상태 업데이트
  };

  return (
    <div>
      <MapContainer address={address} /> {/* 전달! */}
      <div className="absolute top-0 left-0 w-full flex gap-[1rem] justify-between py-[2.4rem] px-[1.8rem]">
        <Container className="w-full">
          <input
            type="text"
            className="w-full text-[1.8rem] px-[1rem]"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </Container>
        <div onClick={handleSearch}>
          <Container className="highlight">
            <SVG
              SVGcomponent={Search}
              bg="#fff"
              width={24}
              height={24}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}
