'use client';
import { userData } from '@/util/types';
import Link from 'next/link';
import style from './page.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page({ id, nickname, email }: userData) {
  const router = useRouter();

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const confirmed = window.confirm('정말 로그아웃하시겠습니까?');
    if (confirmed) {
      router.push('/signin');
    }
  };

  return (
    <div className={style.container}>
      {/* 상단 프로필 */}
      <div className={style.profile}>
        <div className={style.nickname}>{nickname}닉네임</div>
        <div className={style.email}>{email}이메일</div>
      </div>

      <hr />

      {/* 메뉴 리스트 */}
      <div className={style.menuList}>
        <Link
          href="/mypage/interests"
          className={style.menuItem}
        >
          <Image
            src="/interests.png"
            alt="나의 관심"
            width={24}
            height={24}
          />
          <span>나의 관심</span>
        </Link>
        <hr />

        <Link
          href="/mypage/history"
          className={style.menuItem}
        >
          <Image
            src="/history.png"
            alt="최근 기록"
            width={24}
            height={24}
          />
          <span>최근 기록</span>
        </Link>
        <hr />

        <Link
          href="/mypage/setting"
          className={style.menuItem}
        >
          <Image
            src="/setting.png"
            alt="설정"
            width={24}
            height={24}
          />
          <span>설정</span>
        </Link>
        <hr />

        {/* 로그아웃 */}
        <a
          href="/signin"
          onClick={handleLogout}
          className={style.menuItem}
        >
          <Image
            src="/logout.png"
            alt="로그아웃"
            width={24}
            height={24}
          />
          <span>로그아웃</span>
        </a>
      </div>
    </div>
  );
}
