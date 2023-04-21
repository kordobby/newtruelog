import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

export const SideCardWrapper = styled.div`
  background-color: ${colors.brand.white};
  color: ${colors.brand.black};
  font-size: 14px;
  padding: 12px 18px;
  border-radius: 15px;
  h3 {
    ${utilFonts('subtitle')};
    font-size: 18px;
    margin-bottom: 8px;
  }
`;
