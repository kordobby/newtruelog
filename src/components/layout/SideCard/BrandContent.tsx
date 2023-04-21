import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';

const BrandContent = ({ sns, userId }: { sns: string; userId: string }) => {
  return (
    <BrandContentWrapper>
      <div className="icon" />
      <span>{sns}</span>
    </BrandContentWrapper>
  );
};

export default BrandContent;

const BrandContentWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.brand.black};
  padding: 4px 10px;
  .icon {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${colors.brand.blue};
    margin-right: 10px;
  }
  span {
    color: ${colors.brand.black};
    font-family: ${utilFonts('normal')};
    font-size: 14px;
    font-weight: 700;
  }
`;
