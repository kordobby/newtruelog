'use client';

import useQueryString from '@/hooks/useQueryString';
import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { TPost, TPosts } from '@/libs/types';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

interface IFeedHeaderInterface {
  total?: TPosts;
}
const FeedHeader: FC<IFeedHeaderInterface> = ({ total }) => {
  const { searchParams, setQueryString } = useQueryString();
  const sort = searchParams.get('s');
  const [totalCount, setTotalCount] = useState<number>(0);

  useEffect(() => {
    if (!total) return;
    const array = [...total];
    setTotalCount(array?.length);
  }, [JSON.stringify(total)]);

  return (
    <FeedHeaderWrapper>
      <div className="posts">
        <h3>Posts</h3>
        <span>{`(${totalCount})`}</span>
      </div>
      <div className="filter">
        <FeelFilterBtn
          onClick={() => {
            setQueryString('s', 'desc');
          }}
          isActive={sort === null || sort === 'desc'}
        >
          Desc
        </FeelFilterBtn>
        <FeelFilterBtn
          onClick={() => {
            setQueryString('s', 'asc');
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
  margin-bottom: 10px;
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
