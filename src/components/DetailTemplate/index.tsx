'use client';

import { FC } from 'react';
import { TPosts } from '@/libs/types';
import { ExtendedRecordMap } from 'notion-types';
import { useParams } from 'next/navigation';
import DetailPost from '../DetailPost';
interface IDetailProps {
  data: TPosts;
  blockMap: ExtendedRecordMap;
}
const DetailTemplate: FC<IDetailProps> = ({ data, blockMap }) => {
  const { slug } = useParams();
  const post = data?.find((value) => value?.slug === slug);

  if (!post) return <>no</>;
  return <DetailPost data={post} blockMap={blockMap} />;
};

export default DetailTemplate;
