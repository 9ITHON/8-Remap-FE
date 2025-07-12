import style from './history-item.module.css';
import type { fieldData } from '../../util/types';
import Link from 'next/link';
import Image from 'next/image';

export default function HistoryItem({
  id,
  place,
  title,
  coverImgUrl,
}: fieldData) {
  return (
    <Link
      href={`/field/${id}`}
      className={style.container}
    >
      <Image
        src={coverImgUrl}
        width={80}
        height={80}
        alt=""
      />
      <div>
        <div className={style.title}>{title}</div>
        <div className={style.place}>{place}</div>
      </div>
    </Link>
  );
}
