'use client';
import style from './page.module.css';

import Link from 'next/link';
import { signinAction } from '@/actions/signin.action';
import { useEffect, useState } from 'react';
import { useActionState } from 'react';

export default function Page() {
  const [state, formAction, isPending] = useActionState(signinAction, null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <div className={style.container}>
      <div className={style.title}>RE:MAP</div>

      <form
        action={formAction}
        className={style.form}
      >
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isPending}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={isPending}
        />
        <div className={style.link}>
          <Link href={`/signup`}>회원가입 / </Link>
          <Link href={`/find-email`}>이메일 찾기 / </Link>
          <Link href={`/find-password`}>비밀번호 찾기</Link>
        </div>
        <button
          type="submit"
          disabled={!isFormValid || isPending}
          className={isFormValid ? style.activeButton : style.inactiveButton}
        >
          {isPending ? '...' : '로그인'}
        </button>
      </form>
    </div>
  );
}
