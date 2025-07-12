import Link from 'next/link';
import Heart from '@/public/svg/heart.svg';
import Human from '@/public/svg/human.svg';
import Plus from '@/public/svg/plus.svg';
import SVG from 'components/SVG';
import styles from 'styles/nav.module.css';

const wh = 33; // width and height for SVG icons

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <ul className="flex justify-around items-center">
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
            <div className={styles.upload}>
              <SVG
                SVGcomponent={Plus}
                width={wh}
                height={wh}
                bg="#fff"
              />
            </div>
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
