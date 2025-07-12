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
      <div className="absolute top-0 left-0 w-full flex flex-col justify-between p-[2.4rem]">
        <Container className="">
          <SVG SVGcomponent={Search} />
          <input type="text" />
        </Container>
      </div>
    </div>
  );
}
