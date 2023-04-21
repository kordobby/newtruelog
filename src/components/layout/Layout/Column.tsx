'use client';

import styled from 'styled-components';
import SideCard from '../SideCard';

const Column = () => {
  return (
    <ColumnWrapper>
      <div className="left-col"></div>
      <div className="center-col"></div>
      <div className="right-col">
        <SideCard />
      </div>
    </ColumnWrapper>
  );
};

export default Column;

const ColumnWrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  height: 100vh;
  .left-col,
  .right-col {
    grid-column: span 3 / span 3;
    border: 1px solid black;
  }

  .center-col {
    grid-column: span 6 / span 6;
    border: 1px solid black;
  }
`;
