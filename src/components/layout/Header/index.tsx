'use client';

import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

const Header = () => {
  return <HeaderWrapper></HeaderWrapper>;
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${colors.brand.blue};
`;
