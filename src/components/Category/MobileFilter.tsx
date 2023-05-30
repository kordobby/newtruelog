'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
  const filteredTag = router?.query?.t;
  const setTagFilter = (value: string) => {
    if (filteredTag === value) {
      router.push({
        query: {
          ...router.query,
          t: undefined,
        },
      });
    } else {
      router.push({
        query: {
          ...router.query,
          t: value,
        },
      });
    }
  };

  return (
    <MobileFilterWrapper>
      <div className="category-tags">
        {dummyData.map((value, index) => (
          <Text isActive={value === 'All'} key={index}>
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
