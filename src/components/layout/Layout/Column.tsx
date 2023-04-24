'use client';

import styled from 'styled-components';
import SideCard from '../../SideCard';
import Category from '@/components/Category';
import Search from '@/components/Search';
import Profile from '@/components/Profile';
import Feed from '@/components/Feed';

const Column = () => {
  return (
    <ColumnWrapper>
      <div className="left-col">
        <Profile />
      </div>
      <div className="center-col">
        <Feed />
      </div>
      <div className="right-col">
        <Search />
        <Category />
        <SideCard category="contact" />
        <SideCard category="service" />
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
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
  }

  .center-col {
    grid-column: span 6 / span 6;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
  }
`;
