'use client';

import { colors } from '@/libs/global/palette';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Layout: FC<PropsWithChildren> = ({ children }) => {
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
  overflow: scroll;
  background-color: ${colors.brand.gray};
`;
