export const transferDate = (date: string, local: string) => {
  const transDate = new Date(date);
  const options: any = { year: 'numeric', month: 'short', day: 'numeric' };
  const result = transDate.toLocaleDateString(local, options);
  return result;
};
