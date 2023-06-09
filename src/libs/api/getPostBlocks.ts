export const getPostBlocks = async (id: string) => {
  const response = await fetch(`http://localhost:3000/api/block?id=${id}`);
  return response.json();
};
