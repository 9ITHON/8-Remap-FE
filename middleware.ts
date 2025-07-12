import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  // 현재 경로 확인
  const { pathname } = req.nextUrl;

  // "/" 루트 경로일 때만 리다이렉트
  if (pathname === '/') {
    // nextUrl을 복제하고 pathname을 변경
    const url = req.nextUrl.clone();
    url.pathname = '/map';
    return NextResponse.redirect(url);
  }

  // 나머지는 그대로 진행
  return NextResponse.next();
}

// ✅ middleware가 동작할 경로 지정
export const config = {
  matcher: '/',
};
