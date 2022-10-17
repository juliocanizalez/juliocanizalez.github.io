export const isLogin = (): boolean => {
  return localStorage.getItem('auth')?.length! > 0;
};

export const favicon = 'https://img.icons8.com/fluency/28/000000/forward.png';

export const getLogo = (size: number): string => {
  return `https://img.icons8.com/fluency/${size}/000000/forward.png`;
};
