export const SITE_CONFIG = {
  /* meta */
  meta: {
    title: 'Next.js v13 Guide',
    description: 'Next.js v13 Template made by LEETRUE',
    /* Basic Fields */
    generator: 'Next.js',
    applicationName: 'Next.js v13',
    referrer: 'origin-when-cross-origin', //
    keywords: ['Next.js', 'React', 'JavaScript'],
    creator: 'LEETRUE',
    publisher: 'LEETRUE',
    medtadataBase: new URL('https://yoon.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'ko-KR': '/ko-KR',
      },
    },
    authors: [{ name: 'LEETRUE' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: 'website',
      title: 'dynamic title',
      description: 'dynamic description',
      url: 'dynamic url',
      siteName: 'LEETRUE BLOG',
      locale: 'ko_KR',
      images: [
        {
          url: 'imageURL',
          width: 400,
          height: 250,
          alt: 'images for OG',
          type: 'image/jpeg',
          secureUrl: 'secureUrl',
        }, // DYNAMIC
      ],
      authors: ['LEETRUE'],
    },
  },
  /* blog */
  blog: {
    title: 'truelog',
    desc: 'dobby is free',
    since: '2022',
  },
  /* profile */
  profile: {
    name: 'leetrue',
    image: '',
    role: 'Frontend Developer',
    github: 'kordobby',
    instagram: 'yuniscells',
    careerly: 'yoon',
  },
  contact: [
    { name: 'github', href: 'kordobby' },
    { name: 'careerly', href: 'yoon' },
    { name: 'instagram', href: 'yuniscells' },
    { name: 'linkedin', href: 'leetrue' },
  ],

  service: [
    {
      name: 'CHIC',
      href: '',
    },
  ],
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },
  profile: {},
  notionConfig: '',
  gaConfig: '',
  utterances: {
    config: {
      repository: 'kordobby/truelog',
    },
  },
};
