'use client';

import Tag from '@/components/layout/Tag';
import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { TPost } from '@/libs/types';
import { transferDate } from '@/utils/transferDate';
import styled from 'styled-components';

const PostCard = ({ post }: { post: TPost }) => {
  const tags = post?.tags;
  return (
    <PostCardWrapper>
      {/* <div className="profile-image"></div> */}
      <h3>{post.title}</h3>
      <span className="post-date">
        {transferDate(post?.date?.start_date || post?.createdTime, 'ko-KR')}
      </span>
      <span className="post-desc">{post?.summary}</span>
      <div className="tag-wrapper">
        {tags?.map((value, index) => {
          return (
            <Tag key={index} colorIndex={index}>
              {value}
            </Tag>
          );
        })}
      </div>
    </PostCardWrapper>
  );
};

export default PostCard;

const PostCardWrapper = styled.div`
  background-color: ${colors.brand.white};
  height: fit-content;
  margin: 20px 0px;
  border-radius: 30px;
  padding: 35px 30px;
  display: flex;
  flex-direction: column;

  .profile-image {
    height: 282px;
    background-color: #a5d6aa;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  h3 {
    ${utilFonts('postTitle')};
    font-size: 20px;
  }

  .post-date {
    ${utilFonts('normal-m')};
    font-size: 14px;
    color: ${colors.brand.orange};
    margin-bottom: 20px;
  }

  .post-desc {
    ${utilFonts('normal-m')};
    font-size: 14px;
    color: ${colors.text.desc};
  }

  .tag-wrapper {
    margin-top: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    gap: 5px;
  }
`;
