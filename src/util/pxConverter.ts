export const pxToRem = (px: number): string => {
  return `${px * 0.063}rem`;
};

export const pxToVw = (px: number): string => {
  if (typeof window !== "undefined") {
    return `${(100 * px) / window?.innerWidth}vw`;
  }
};
export const pxToVh = (px: number): string => {
  if (typeof window !== "undefined") {
    return `${(100 * px) / window?.innerHeight}vh`;
  }
};
