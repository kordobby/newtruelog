'use client';

import { TPost } from '@/libs/types';
import Tag from '../layout/Tag';
import { FC } from 'react';
import styled from 'styled-components';
import { transferDate } from '@/utils/transferDate';

interface IDetailHeaderProps {
  data: TPost;
}
const DetailHeader: FC<IDetailHeaderProps> = ({ data }) => {
  if (!data) return <></>;
  return (
    <DetailHeaderWrapper>
      <h1>{data?.title}</h1>
      <div>
        {data?.author && (
          <img className="author_img" src={data.author[0].profile_photo} />
        )}
        {data?.author && <span>{data?.author?.[0].name}</span>}
      </div>
      <span className="post-date">
        {transferDate(data?.date?.start_date || data?.createdTime, 'ko-KR')}
      </span>
      {data?.tags?.map((value, index) => {
        return (
          <Tag key={`detail-tag-${value}`} colorIndex={index}>
            {value}
          </Tag>
        );
      })}
      {data?.thumbnail && (
        <div>
          <img src={data?.thumbnail} alt={data?.title} />
        </div>
      )}
    </DetailHeaderWrapper>
  );
};

const DetailHeaderWrapper = styled.div`
  img {
    width: 100%;
  }

  .author_img {
    width: 20px;
    height: 20px;
    border-radius: 20px;
  }
`;

export default DetailHeader;
