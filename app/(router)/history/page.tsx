import HistoryItem from '@/app/components/history-item';
import type { fieldData } from '@/util/types';
import style from './page.module.css';

export default function Page() {
  // 📝 임시 mock 데이터
  const historys: fieldData[] = [
    {
      id: 1,
      title: '장소 이름 1',
      place: '서울특별시 강남구',
      coverImgUrl: '/placeholder.png', // public 폴더에 placeholder.png 넣어두면 됨
    },
    {
      id: 2,
      title: '장소 이름 2',
      place: '부산광역시 해운대구',
      coverImgUrl: '/placeholder.png',
    },
    {
      id: 3,
      title: '장소 이름 3',
      place: '대구광역시 중구',
      coverImgUrl: '/placeholder.png',
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>최근 기록</div>
      <hr />
      <div className={style.list}>
        {historys.map(history => (
          <HistoryItem
            key={history.id}
            {...history}
          />
        ))}
      </div>
    </div>
  );
}
