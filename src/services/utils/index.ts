export const isLogin = (): boolean => {
  return localStorage.getItem('auth')?.length! > 0;
};
