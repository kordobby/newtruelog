'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

const Search = () => {
  return (
    <SearchWrapper>
      <h3>Search</h3>
      <div className="search-box">
        <input></input>
      </div>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  background-color: ${colors.brand.white};
  border-radius: 15px;
  font-size: 14px;
  padding: 12px 18px 18px 18px;
  margin: 15px 0px;

  h3 {
    ${utilFonts('subtitle')};
    color: ${colors.brand.black};
    font-size: 18px;
    margin-bottom: 4px;
  }

  .search-box {
    /* border: 1px solid red; */
    border-bottom: 1px solid ${colors.brand.black};
    padding: 5px;
    input {
      border: none;
      outline: none;
    }
  }
`;
