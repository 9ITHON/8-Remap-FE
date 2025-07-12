'use client';

import style from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const router = useRouter();

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      alert('모든 항목을 작성해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error(await res.text());
      }

      const data = await res.json();

      if (data.status) {
        alert('로그인에 성공했습니다.');
        router.push('/'); // 로그인 후 이동할 페이지
      } else {
        alert(data.error || '로그인 실패');
      }
    } catch (error) {
      console.error(error);
      alert('로그인 요청 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.title}>RE:MAP</div>

      <form
        onSubmit={handleSubmit}
        className={style.form}
      >
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
        <div className={style.link}>
          <Link href="/signup">회원가입 / </Link>
          <Link href="/find-email">이메일 찾기 / </Link>
          <Link href="/find-password">비밀번호 찾기</Link>
        </div>
        <button
          type="submit"
          disabled={!isFormValid || isSubmitting}
          className={isFormValid ? style.activeButton : style.inactiveButton}
        >
          {isSubmitting ? '...' : '로그인'}
        </button>
      </form>
    </div>
  );
}
