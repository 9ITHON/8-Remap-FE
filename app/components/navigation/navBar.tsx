import Link from 'next/link';
import Heart from '@/public/svg/heart.svg';
import Human from '@/public/svg/human.svg';
import SVG from '../SVG';

const wh = 33; // width and height for SVG icons

export default function NavBar() {
  return (
    <nav className="absolute bottom-0 left-0 w-full bg-white p-[4rem] pt-[2.2rem] pb-[3rem] z-100">
      <ul className="flex justify-between items-center">
        <li className="">
          <Link
            href={'#'}
            className="flex items-center justify-center"
          >
            <SVG
              SVGcomponent={Heart}
              width={wh}
              height={wh}
            />
          </Link>
        </li>
        <li className="">
          <Link
            href={'#'}
            className="flex items-center justify-center"
          >
            <SVG
              SVGcomponent={Heart}
              width={wh}
              height={wh}
            />
          </Link>
        </li>
        <li className="">
          <Link
            href={'#'}
            className="flex items-center justify-center"
          >
            <SVG
              SVGcomponent={Human}
              width={wh}
              height={wh}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
