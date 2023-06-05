'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { FC, useCallback } from 'react';
import { TTags } from '@/libs/types';

interface IFilter {
  tags: TTags;
}
const MobileFilter: FC<IFilter> = ({ tags }) => {
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
    <MobileFilterWrapper>
      <div className="category-tags">
        <TagWrapper
          key={`mobile-tag-all`}
          style={{ cursor: 'pointer' }}
          isActive={tag === null}
          onClick={clearTagFilter}
        >
          <span>All</span>
        </TagWrapper>
        {tagList?.map((value, index) => (
          <TagWrapper
            isActive={value === tag}
            key={`mobile-tag-${value}`}
            onClick={() => {
              setTagFilter(value);
            }}
            style={{ cursor: 'pointer' }}
          >
            <span>{value}</span>
          </TagWrapper>
        ))}
      </div>
    </MobileFilterWrapper>
  );
};

export default MobileFilter;

const MobileFilterWrapper = styled.div`
  display: none;
  /* hide scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 72rem) {
    display: block;
    overflow: scroll;

    .category-tags {
      display: flex;
      font-family: ${utilFonts('normal')};
      font-size: 14px;
      font-weight: 700;
      gap: 5px;
      padding-left: 10px;
    }
  }
`;

const TagWrapper = styled.div<{ isActive: boolean }>`
  background-color: ${({ isActive }) => isActive && colors.brand.blue};
  padding: 2px 10px;
  border-radius: 5px;
  width: 150px;
  display: flex;
  align-items: center;
  span {
    color: ${({ isActive }) => isActive && colors.brand.white};
  }
`;
