'use client';

import { colors } from '@/libs/global/palette';
import styled from 'styled-components';
import Logo from './Logo';
import { IBM_ITALIC_B } from '@/libs/global/fonts';

const Header = () => {
  return (
    <HeaderWrapper className={IBM_ITALIC_B.className}>
      <HeaderInnerWrapper>
        <Logo types="logo" />
        <Logo types="about" />
      </HeaderInnerWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.brand.blue};
  position: sticky;
  z-index: 4;
  top: 0;
  display: flex;
  justify-content: center;
`;

const HeaderInnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 0px 2rem;
`;
