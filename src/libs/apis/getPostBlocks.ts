import { NotionAPI } from 'notion-client';

export async function getPostBlocks(id: string) {
  const api = new NotionAPI();
  const pageBlock = await api.getPage('c82b4d55012b4601b7a1021e75ed7594');
  return pageBlock;
}
