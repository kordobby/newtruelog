'use client';

import Tag from '@/components/layout/Tag';
import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

const PostCard = () => {
  return (
    <PostCardWrapper>
      {/* <div className="profile-image"></div> */}
      <h3>React Design Pattern and Storybook Basic</h3>
      <span className="post-date">Apr 7, 2023</span>
      <span className="post-desc">
        리액트 디자인 패턴에 대한 이론적인 내용ㅇ고 ㅏ스로티북 찍먹 기록입니다.
      </span>
      <div className="tag-wrapper">
        {[1, 2, 3].map((value, index) => {
          return (
            <Tag key={index} colorIndex={index}>
              React
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
