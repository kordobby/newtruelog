import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

const FeedHeader = () => {
  return (
    <FeedHeaderWrapper>
      <div className="posts">
        <h3>Posts</h3>
        <span>(23)</span>
      </div>
      <div className="filter">
        <FeelFilterBtn isActive={true}>Desc</FeelFilterBtn>
        <FeelFilterBtn isActive={false}>Asc</FeelFilterBtn>
      </div>
    </FeedHeaderWrapper>
  );
};

export default FeedHeader;

const FeedHeaderWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.brand.black};
  h3 {
    ${utilFonts('subtitle')};
    font-size: 28px;
    margin: 0;
    padding: 0;
    /* margin-bottom: 8px; */
  }
  display: flex;
  justify-content: space-between;
  .posts {
    display: flex;
    align-items: flex-end;
    gap: 5px;
    span {
      ${utilFonts('subtitle')};
      margin-bottom: 4px;
    }
  }

  .filter {
    display: flex;
    gap: 5px;
    align-items: flex-end;
  }
`;

const FeelFilterBtn = styled.button<{ isActive: boolean }>`
  padding: 0;
  margin: 0;
  border: none;
  ${utilFonts('subtitle')};
  margin-bottom: 2px;
  font-size: 18px;
  cursor: pointer;
  color: ${({ isActive }) =>
    isActive ? colors.brand.blue : colors.brand.black};
`;
