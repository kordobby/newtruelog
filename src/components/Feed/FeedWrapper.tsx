'use client';

import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const FeedWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export default FeedWrapper;
