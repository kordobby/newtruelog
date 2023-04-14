import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { CONFIG } from '../../seo.config';
import { FC } from 'react';

export interface MetaProps {
  title: string;
  description: string;
  type: 'Website' | 'Post' | 'Page' | string;
  date?: string;
  image?: string;
  url: string;
}

const Meta: FC<MetaProps> = ({ ...props }) => {
  const meta = { ...props };
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta charSet="UTF-8" />
        {CONFIG?.seo.keywords && (
          <meta name="kewords" content={CONFIG.seo.keywords.join(', ')} />
        )}
        <meta name="description" content={meta.description} />
        {/* OG */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:locale" content={CONFIG?.lang} />
        <meta property="og:image" content={meta.image} />
        {/* Twitter */}
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={meta.image} />
        {/* POST */}
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta property="article:author" content={CONFIG?.profile.name} />
        </>
      </Head>
    </>
  );
};

export default Meta;
