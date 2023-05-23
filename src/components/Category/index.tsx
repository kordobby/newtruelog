'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

const Category = () => {
  const dummyData = ['All', 'Blog', 'Next.js', 'React', 'Monthly'];
  return (
    <CategoryWrapper>
      <h3>Category</h3>
      <div className="category-tags">
        {dummyData.map((value, index) => (
          <span key={value}>{value}</span>
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
    color: ${({ isActive }) =>
      isActive ? colors.brand.orange : colors.brand.black};
    span {
      &:hover {
        color: ${colors.brand.orange};
      }
    }
  }
`;
