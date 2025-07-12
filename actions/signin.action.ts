'use server';

type SigninResult = {
  status: boolean;
  message?: string;
  error?: string;
};

export async function signinAction(formData: FormData): Promise<SigninResult> {
  const email = formData.get('email')?.toString();
  const password = formData.get('password')?.toString();

  if (!email || !password) {
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
        body: JSON.stringify({ email, password }),
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
