'use client';

import styled from 'styled-components';
import SideCard from '../../SideCard';
import Category from '@/components/Category';
import Search from '@/components/Search';
import Profile from '@/components/Profile';
import Feed from '@/components/Feed';
import MobileProfile from '@/components/Profile/MobileProfile';
import MobileSearch from '@/components/Search/MobileSearch';

const Column = () => {
  return (
    <ColumnWrapper>
      <div className="left-col">
        <Profile />
      </div>
      <div className="center-col">
        <MobileProfile />
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
  @media (max-width: 72rem) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
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
      grid-column: span 10 / span 10;
    }
    display: flex;
    flex-direction: column;
  }
`;
