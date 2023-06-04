'use client';

import { FC } from 'react';
import { TPost } from '@/libs/types';
import { ExtendedRecordMap } from 'notion-types';
import DetailPost from '../DetailPost';
import styled from 'styled-components';

interface IDetailProps {
  data: TPost;
  blockMap: ExtendedRecordMap;
}
const DetailTemplate: FC<IDetailProps> = ({ data, blockMap }) => {
  return <DetailPost data={data} blockMap={blockMap} />;
};

export default DetailTemplate;
