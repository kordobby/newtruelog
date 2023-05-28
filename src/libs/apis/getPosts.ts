import getPageIds from '@/utils/getPageIds';
import { NotionAPI } from 'notion-client';
import { idToUuid } from 'notion-utils';
import getPageProps from '@/utils/getPageProps';
import { TPosts } from '../types';

export const getPosts = async () => {
  const id = 'c82b4d55012b4601b7a1021e75ed7594' as string;
  const api = new NotionAPI();
  const response = await api.getPage(id);

  const collection = Object.values(response.collection)[0]?.value;
  const block = response.block;
  const schema = collection?.schema;
  const uuid = idToUuid(id);
  const rawMetadata = block[uuid].value;

  // Check Type
  if (
    rawMetadata?.type !== 'collection_view_page' &&
    rawMetadata?.type !== 'collection_view'
  ) {
    return [];
  } else {
    // Construct Data
    const pageIds = getPageIds(response);
    const data = [];
    for (let i = 0; i < pageIds.length; i++) {
      const id = pageIds[i];
      const properties = (await getPageProps(id, block, schema)) || null;
      // Add fullwidth, createdtime to properties
      properties.createdTime = new Date(
        block[id].value?.created_time,
      ).toString();
      properties.fullWidth =
        (block[id].value?.format as any)?.page_full_width ?? false;

      data.push(properties);
    }

    // Sort by date
    data.sort((a: any, b: any) => {
      const dateA: any = new Date(a?.date?.start_date || a.createdTime);
      const dateB: any = new Date(b?.date?.start_date || b.createdTime);
      return dateB - dateA;
    });

    return data as TPosts;
  }
};
