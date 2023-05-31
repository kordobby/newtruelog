'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useCallback, useState } from 'react';

const MobileFilter = () => {
  const dummyData = [
    'All',
    'Blog',
    'Next.js',
    'React',
    'Monthly',
    'Blog',
    'Next.js',
    'React',
    'Monthly',
    'Blog',
    'Next.js',
    'React',
    'Monthly',
  ];

  const router = useRouter();
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const tag = searchParams.get('t');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams();
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

  return (
    <MobileFilterWrapper>
      <div className="category-tags">
        {dummyData.map((value, index) => (
          <Text
            onClick={() => {
              setTagFilter(value);
            }}
            isActive={value === 'All'}
            key={index}
            style={{ cursor: 'pointer' }}
          >
            {value}
          </Text>
        ))}
      </div>
    </MobileFilterWrapper>
  );
};

export default MobileFilter;

const MobileFilterWrapper = styled.div`
  display: none;
  @media (max-width: 72rem) {
    display: block;
    overflow: scroll;

    .category-tags {
      display: flex;
      /* flex-direction: column; */
      font-family: ${utilFonts('normal')};
      font-size: 14px;
      font-weight: 700;
      gap: 10px;
      padding-left: 10px;
    }
  }
`;

const Text = styled.span<{ isActive: boolean }>`
  background-color: ${({ isActive }) => isActive && colors.brand.blue};
  color: ${({ isActive }) => isActive && colors.brand.white};
  padding: 5px 10px;
  border-radius: 5px;
`;
