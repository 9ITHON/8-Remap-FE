'use client';

import Link from 'next/link';
import style from './page.module.css';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Page() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const isFormValid =
    nickname.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    telephone.trim() !== '' &&
    birthdate.trim() !== '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('모든 항목을 작성해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname,
          email,
          password,
          phone: telephone,
          birthdate,
        }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();

      if (data.status) {
        alert('회원가입이 완료되었습니다.');
        router.push('/signin');
      } else {
        alert(data.error || '회원가입 실패');
      }
    } catch (error) {
      console.error(error);
      alert('회원가입 요청 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  function goBack() {
    window.history.back();
  }

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link
          href="/"
          className={style.backbutton}
        >
          <svg viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <h1 className={style.headerTitle}>RE:MAP</h1>
      </div>

     <form
        onSubmit={handleSubmit}
        className={style.form}
      >
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setNickname(e.target.value)
          }
          disabled={isSubmitting}
        />
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          disabled={isSubmitting}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          disabled={isSubmitting}
        />
        <input
          type="tel"
          name="phone"
          placeholder="전화번호"
          value={telephone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTelephone(e.target.value)
          }
          disabled={isSubmitting}
        />
        <input
          type="date"
          name="birthdate"
          placeholder="생년월일"
          value={birthdate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBirthdate(e.target.value)
          }
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={isFormValid ? style.activeButton : style.inactiveButton}
        >
          {isSubmitting ? '...' : '회원가입'}
        </button>
      </form>
    </div>
  );
}
