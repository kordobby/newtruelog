'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { TPosts, TTags } from '@/libs/types';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FC, useCallback } from 'react';
import styled from 'styled-components';

interface ICategoryProps {
  tags: TTags;
}
const Category: FC<ICategoryProps> = ({ tags }) => {
  const tagList = Object.keys(tags);
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const tag = searchParams.get('t');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      if (tag === value) {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      return params.toString();
    },
    [searchParams],
  );

  const setTagFilter = (value: string) => {
    router.push(`${pathname}?${createQueryString('t', value)}`);
  };

  const clearTagFilter = () => {
    if (!tag) return;
    const params = new URLSearchParams(searchParams?.toString());
    params.delete('t');
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <CategoryWrapper>
      <h3>Category</h3>
      <div className="category-tags">
        <Tag
          isActive={tag === null}
          onClick={clearTagFilter}
          key={`tag-all-full`}
        >
          {tag === null && `👉 `}
          {`All`}
        </Tag>
        {tagList?.map((value, index) => (
          <Tag
            isActive={value === tag}
            onClick={() => {
              setTagFilter(value);
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
