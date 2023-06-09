import { NextResponse } from 'next/server';
import { NotionAPI } from 'notion-client';
export const revalidate = 60;

export const GET = async (request: Request) => {
  const api = new NotionAPI();
  const url = new URL(request?.url);
  const id = new URLSearchParams(url.search).get('id');
  const pageBlock = await api.getPage(id ?? '');
  return NextResponse.json({ data: pageBlock });
};
