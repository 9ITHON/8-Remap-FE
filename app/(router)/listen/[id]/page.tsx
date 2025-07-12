'use client';
import style from './page.module.css';

export default function Page() {
  function goBack() {
    window.history.back();
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <button
          className={style.backBtn}
          onClick={goBack}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <h1 className={style.headerTitle}>소중한 기억</h1>
      </div>

      <div className={style.photoContainer}>
        <img
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="기억 사진"
          className={style.photo}
        />
        <div className={style.photoOverlay}>
          <h2 className={style.memoryTitle}>서울 한강공원에서의 일몰</h2>
          <div className={style.memoryLocation}>
            <svg
              className={style.icon}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            서울특별시 여의도 한강공원
          </div>
        </div>
      </div>

      <div className={style.content}>
        <div className={style.userInfo}>
          <div className={style.userAvatar}>김</div>
          <div className={style.userDetails}>
            <div className={style.userName}>김민수</div>
            <div className={style.memoryTime}>
              <svg
                className={style.icon}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              2024년 7월 15일 오후 6:30
            </div>
          </div>
        </div>

        <div className={style.memoryDescription}>
          <h3 className={style.descriptionTitle}>✨ 기억의 순간</h3>
          <p className={style.descriptionText}>
            친구들과 함께 한강공원에서 맞이한 아름다운 일몰이었습니다. 하늘이
            주황빛으로 물들면서 강물에 반사되는 모습이 정말 환상적이었어요. 바쁜
            일상 속에서 잠시 멈춰 서서 자연의 아름다움을 만끽할 수 있었던 소중한
            시간이었습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
