import getPageIds from '@/utils/getPageIds';
import { NotionAPI } from 'notion-client';
import { idToUuid } from 'notion-utils';
import { TPosts } from '@/libs/types';
import getPageProps from '@/utils/getPageProps';
import { NextResponse } from 'next/server';

export const revalidate = 60;

export const GET = async (request: Request) => {
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

    const post = data as TPosts;

    const current = new Date();
    const tomorrow = new Date(current);
    const filteredPost = post
      .filter((value) => {
        const date = new Date(value?.date?.start_date || value?.createdTime);
        if (!value.title || !value.slug || date > tomorrow) return false;
        return true;
      })
      .filter((value) => {
        const status = value?.status?.[0];
        return ['Public'].includes(status);
      })
      .filter((value) => {
        const type = value?.type?.[0];
        return ['Post'].includes(type);
      });

    const returnData = filteredPost as TPosts;
    return NextResponse.json({ data: returnData });
  }
};
