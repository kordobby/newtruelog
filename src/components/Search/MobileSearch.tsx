'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

const MobileSearch = () => {
  const [keyword, setKeyword] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const enterKeyword = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log('heyllo');
    if (e.key === 'Enter') {
      router.push(`${pathname}?${createQueryString('k', keyword)}`);
    }
  };

  return (
    <MobileSearchWrapper>
      <div className="search-box">
        <span>🔍</span>
        <input
          type="text"
          onChange={getKeyword}
          onKeyDown={enterKeyword}
        ></input>
      </div>
    </MobileSearchWrapper>
  );
};

const MobileSearchWrapper = styled.div`
  display: none;
  @media (max-width: 72rem) {
    display: block;
    background-color: ${colors.brand.white};
    border-radius: 15px;
    font-size: 14px;
    padding: 12px 18px 18px 18px;
    margin: 15px 0px;
    h3 {
      ${utilFonts('subtitle')};
      color: ${colors.brand.black};
      font-size: 18px;
      margin-bottom: 4px;
    }
    .search-box {
      display: flex;
      padding: 5px;
      input {
        margin-left: 12px;
        border: none;
        outline: none;
        width: 100%;
      }
    }
  }
`;

export default MobileSearch;
