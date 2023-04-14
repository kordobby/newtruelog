import { NextSeoProps } from 'next-seo';

export const CONFIG = {
  profile: {
    name: 'leetrue',
    image: '', //
    role: 'Front-end Developer',
    bio: 'hello hi',
    email: 'poordobby@naver.com',
    github: 'kordobby',
    instagram: 'yuniscells',
  },
  projects: [
    {
      name: 'CHIC',
      href: '',
    },
  ],
  blog: {
    title: 'truelog',
    description: 'welcome to yuniscells',
    theme: 'auto', // ['light', 'dark', 'auto']
  },
  link: 'https://leetrue-log.vercel.app',
  since: 2022,
  lang: 'ko-KR',
  ogImageGenerateURL: 'https://og-image-korean.vercel.app',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },
  notionConfig: {
    pageId: '',
  },
  utterances: {
    enable: true,
    config: {
      repo: 'kordobby/truelog',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    },
  },
};

module.exports = CONFIG;
