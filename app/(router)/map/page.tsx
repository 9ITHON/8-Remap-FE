import Container from 'components/Container';
import MapContainer from 'components/map/mapContainer';
import Search from '@/public/svg/search.svg';
import SVG from 'components/SVG';

export default function Home() {
  return (
    <div>
      <MapContainer
        coordinates={{ x: 37.3595316, y: 127.1052133 }}
      ></MapContainer>
      <div className="absolute top-0 left-0 w-full flex gap-[1rem] justify-between py-[2.4rem] px-[1.8rem]">
        <Container className="w-full">
          <input
            type="text"
            className="w-full text-[1.8rem] px-[1rem]"
          />
        </Container>
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
  );
}
