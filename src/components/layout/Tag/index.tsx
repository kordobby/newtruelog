'use client';

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
  return <StTag bgColor={colors[colorIndex ?? 0]}>{children}</StTag>;
};

export default Tag;

const StTag = styled.div<{ bgColor: 'blue' | 'orange' }>`
  padding: 10px 12px;
  background-color: ${({ bgColor }) => colors.brand[bgColor]};
`;
