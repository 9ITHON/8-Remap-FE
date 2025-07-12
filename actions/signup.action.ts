'use server';

export async function signupAction(formData: FormData) {
  const nickname = formData.get('nickname')?.toString();
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();
  const phone = formData.get('phone')?.toString();
  const birthdate = formData.get('birthdate')?.toString();

  if (!nickname || !email || !password || !phone || !birthdate) {
    return {
      status: false,
      error: '모든 항목을 작성해주세요.',
    };
  }

  // ✅ 추후 API 요청 코드 (주석 처리)
  /*
    try {
      const response = await fetch('https://your-api-url/signup', {
        method: 'POST',
        body: JSON.stringify({ nickname, email, password, phone, birthdate }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return { status: true, message: '회원가입 성공' };
    } catch (error) {
      console.error('회원가입 실패:', error);
      return { status: false, error: '회원가입 요청 실패' };
    }
    */

  return { status: true, message: 'ok' };
}
