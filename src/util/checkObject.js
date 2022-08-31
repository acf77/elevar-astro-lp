export const isObjectValid = (data) => {
  return Object.values(data).some(x => x === null || x === '');
}
