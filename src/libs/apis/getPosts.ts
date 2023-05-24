import { NotionAPI } from 'notion-client';
import { idToUuid } from 'notion-utils';

export const getPosts = async () => {
  const id = 'c82b4d55012b4601b7a1021e75ed7594' as string;
  const api = new NotionAPI();
  const response = await api.getPage(id);

  const collection = Object.values(response.collection)[0]?.value;
  const block = response.block;
  const schema = collection?.schema;
  const uuid = idToUuid(id);
  const rawMetadata = block[uuid].value;

  console.log('roaw', rawMetadata);
};
