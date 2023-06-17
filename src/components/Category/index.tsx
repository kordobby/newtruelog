'use client';

import useQueryString from '@/hooks/useQueryString';
import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { TTags } from '@/libs/types';
import { useSearchParams } from 'next/navigation';
import { FC } from 'react';
import styled from 'styled-components';

interface ICategoryProps {
  tags: TTags;
}
const Category: FC<ICategoryProps> = ({ tags }) => {
  const { searchParams, setQueryString, clearQueryString } = useQueryString();
  const tagList = Object.keys(tags);
  const tag = searchParams.get('t');

  return (
    <CategoryWrapper>
      <h3>Category</h3>
      <div className="category-tags">
        <Tag
          isActive={tag === null}
          onClick={clearQueryString}
          key={`tag-all-full`}
        >
          {tag === null && `👉 `}
          {`Aldl`}
        </Tag>
        {tagList?.map((value, index) => (
          <Tag
            isActive={value === tag}
            onClick={() => {
              setQueryString('t', value);
            }}
            key={`tag-${value}-${index}-full`}
          >
            {value === tag && `👉 `}
            {value}
          </Tag>
        ))}
      </div>
    </CategoryWrapper>
  );
};

export default Category;

const CategoryWrapper = styled.div<{ isActive?: boolean }>`
  background-color: ${colors.brand.white};
  border-radius: 15px;
  font-size: 14px;
  padding: 12px 18px;
  margin: 15px 0px;
  h3 {
    ${utilFonts('subtitle')};
    color: ${colors.brand.black};
    font-size: 18px;
    margin-bottom: 8px;
  }

  .category-tags {
    display: flex;
    flex-direction: column;
    font-family: ${utilFonts('normal')};
    font-size: 14px;
    font-weight: 700;
    gap: 5px;
    padding-left: 10px;
  }
`;

const Tag = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) =>
    isActive ? colors.brand.blue : colors.brand.black};
  &:hover {
    color: ${colors.brand.orange};
  }
`;
