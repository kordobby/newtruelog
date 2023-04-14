export const getPageUrl = (id: string) => {
  return `https://www.notion.so/${id.replace(/-/g, '')}`;
};
