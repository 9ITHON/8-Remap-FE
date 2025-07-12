'use client';

import Link from 'next/link';
import style from './page.module.css';

import { signupAction } from '@/actions/signup.action';
import { useEffect, useState } from 'react';
import { useActionState } from 'react';

export default function Page() {
  const [state, formAction, isPending] = useActionState(signupAction, null);

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const isFormValid =
    nickname.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    telephone.trim() !== '' &&
    birthdate.trim() !== '';

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <Link
          className={style.backbutton}
          href={`/`}
        >
          ◀
        </Link>
        <div className={style.title}>RE:MAP</div>
      </div>

      <form
        action={formAction}
        className={style.form}
      >
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={nickname}
          onChange={e => setNickname(e.target.value)}
          disabled={isPending}
        />
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
        <input
          type="tel"
          name="phone"
          placeholder="전화번호"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
          disabled={isPending}
        />
        <input
          type="date"
          name="birthdate"
          placeholder="생년월일"
          value={birthdate}
          onChange={e => setBirthdate(e.target.value)}
          disabled={isPending}
        />
        <button
          type="submit"
          disabled={!isFormValid || isPending}
          className={isFormValid ? style.activeButton : style.inactiveButton}
        >
          {isPending ? '...' : '회원가입'}
        </button>
      </form>
    </div>
  );
}
