import dynamic from 'next/dynamic';

export const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code),
);
export const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection,
  ),
);
export const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
);
export const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  },
);
export const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false,
  },
);

export const mapPageUrl = (id: string) => {
  return 'https://www.notion.so/' + id.replace(/-/g, '');
};
