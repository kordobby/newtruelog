'use client';

import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const ColumnWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ColumnWrapper;

/* 구조 관련해서 추가적으로 찾아보자. */
const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  @media (max-width: 72rem) {
    grid-template-columns: repeat(24, minmax(0, 1fr));
    gap: 0rem;
  }
  height: 100vh;
  padding-top: 40px;
  .left-col,
  .right-col {
    grid-column: span 3 / span 3;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    @media (max-width: 72rem) {
      grid-column: span 1 / span 1;
    }
    div {
      @media (max-width: 72rem) {
        display: none !important;
      }
    }
  }

  .left-col {
    align-items: flex-end;
  }
  .center-col {
    grid-column: span 6 / span 6;
    /* border: 1px solid black; */
    @media (max-width: 72rem) {
      grid-column: span 22 / span 22;
    }
    display: flex;
    flex-direction: column;
  }
`;
