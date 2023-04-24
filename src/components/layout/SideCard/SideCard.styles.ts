import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

export const SideCardWrapper = styled.div<{ isContact: boolean }>`
  background-color: ${({ isContact }) =>
    isContact ? colors.brand.orange : colors.brand.white};
  color: ${({ isContact }) =>
    isContact ? colors.brand.white : colors.brand.black};
  font-size: 14px;
  padding: 12px 18px;
  border-radius: 15px;
  margin: 15px 0px;
  h3 {
    ${utilFonts('subtitle')};
    font-size: 18px;
    margin-bottom: 8px;
  }
`;
