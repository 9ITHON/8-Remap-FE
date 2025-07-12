'use client';

import Link from 'next/link';
import Heart from '@/public/svg/heart.svg';
import Human from '@/public/svg/human.svg';
import Plus from '@/public/svg/plus.svg';
import SVG from 'components/SVG';
import styles from 'styles/nav.module.css';
import { useState } from 'react';
import clsx from 'clsx';
import { useUploadStore } from '@/store/useUploadStore';

const wh = 33; // width and height for SVG icons

// toggle upload button

export default function NavBar() {
  const { isUploadMode, toggleMode } = useUploadStore();

  const toggleUpload = () => {
    console.log('toggle upload');
    toggleMode();
  };

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
          <div className="flex items-center justify-center">
            <div
              className={clsx(
                styles.upload,
                isUploadMode ? styles.in : styles.out
              )}
              onClick={toggleUpload}
            >
              <SVG
                SVGcomponent={Plus}
                width={wh}
                height={wh}
                bg="#fff"
              />
            </div>
          </div>
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
