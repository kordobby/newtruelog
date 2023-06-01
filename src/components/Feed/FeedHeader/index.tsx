'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import styled from 'styled-components';

const FeedHeader = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const sort = searchParams.get('s');
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );
  const setTagFilter = (value: string) => {
    router.push(`${pathname}?${createQueryString('s', value)}`);
  };
  return (
    <FeedHeaderWrapper>
      <div className="posts">
        <h3>Posts</h3>
        <span>(23)</span>
      </div>
      <div className="filter">
        <FeelFilterBtn
          onClick={() => {
            setTagFilter('desc');
          }}
          isActive={sort === null || sort === 'desc'}
        >
          Desc
        </FeelFilterBtn>
        <FeelFilterBtn
          onClick={() => {
            setTagFilter('asc');
          }}
          isActive={sort === 'asc'}
        >
          Asc
        </FeelFilterBtn>
      </div>
    </FeedHeaderWrapper>
  );
};

export default FeedHeader;

const FeedHeaderWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.brand.black};
  margin-bottom: 20px;
  h3 {
    ${utilFonts('subtitle')};
    font-size: 28px;
    margin: 0;
    padding: 0;
    /* margin-bottom: 8px; */
  }
  display: flex;
  justify-content: space-between;
  .posts {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    span {
      ${utilFonts('subtitle')};
      margin-bottom: 4px;
    }
  }

  .filter {
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }
`;

const FeelFilterBtn = styled.button<{ isActive: boolean }>`
  padding: 0;
  margin: 0;
  border: none;
  ${utilFonts('subtitle')};
  margin-bottom: 2px;
  font-size: 18px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? colors.brand.blue : colors.brand.black};
`;
