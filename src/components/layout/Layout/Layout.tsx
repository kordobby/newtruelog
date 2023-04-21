'use client';

import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;

  background-color: ${colors.brand.white};
`;
