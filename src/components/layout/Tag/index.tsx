'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

/**
 * Tag Array length % 2 값으로 색상 부여하면 될 것 같음
 * */
interface ITag {
  children: string;
  colorIndex: number;
}

type TagColorType = 'blue' | 'orange';

const Tag = ({ children, colorIndex }: ITag) => {
  const colors = ['blue', 'orange'] as TagColorType[];
  return <StTag bgColor={colors[colorIndex % 2 ?? 0]}>{children}</StTag>;
};

export default Tag;

const StTag = styled.div<{ bgColor: 'blue' | 'orange' }>`
  padding: 5px 12px;
  background-color: ${({ bgColor }) => colors.brand[bgColor]};
  color: ${colors.brand.white};
  border-radius: 8px;
  width: fit-content;
  ${utilFonts('normal-m')};
  font-size: 12px;
`;
