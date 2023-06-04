'use client';

import { FC } from 'react';
import { TPost } from '@/libs/types';
import { ExtendedRecordMap } from 'notion-types';
import DetailPost from '../DetailPost';
import styled from 'styled-components';
import DetailHeader from '../DetailHeader.tsx';

interface IDetailProps {
  data: TPost;
  blockMap: ExtendedRecordMap;
}
const DetailTemplate: FC<IDetailProps> = ({ data, blockMap }) => {
  return (
    <DetailTemplateWrapper>
      <DetailHeader data={data} />
      <DetailPost data={data} blockMap={blockMap} />
    </DetailTemplateWrapper>
  );
};

export default DetailTemplate;

const DetailTemplateWrapper = styled.div`
  background-color: white;
  width: 90%;
  margin: 20px auto;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 40px;
`;
