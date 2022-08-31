export const firstLetterCapitalize = (text: string) => {
  const lowerCaseText = text?.toLowerCase().replace("_", " ");
  const firstLetter = lowerCaseText?.charAt(0).toUpperCase();
  const rest = lowerCaseText?.slice(1);

  return `${firstLetter}${rest}`;
};
