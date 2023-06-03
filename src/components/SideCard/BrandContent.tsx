import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import { ContactType, transferLinkUrl } from '@/utils/transferLinkUrl';
import Link from 'next/link';
import styled from 'styled-components';
import { getContactIcon } from './MobileContact';
const BrandContent = ({
  sns,
  linkName,
  isContact,
}: {
  sns: ContactType;
  linkName: string;
  isContact: boolean;
}) => {
  return (
    <BrandContentWrapper isContact={isContact} onClick={() => {}}>
      <Link href={transferLinkUrl(sns) ?? ''} target="_blank">
        <div className="icon">{getContactIcon(sns, true)}</div>
        <span>{sns}</span>
      </Link>
    </BrandContentWrapper>
  );
};

export default BrandContent;

const BrandContentWrapper = styled.div<{ isContact: boolean }>`
  a {
    display: flex;
    align-items: center;
  }
  color: ${({ isContact }) =>
    isContact ? colors.brand.white : colors.brand.black};
  padding: 4px 10px;
  .icon {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: ${colors.brand.blue};
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    /* color: ${colors.brand.black}; */
    font-family: ${utilFonts('normal')};
    font-size: 14px;
    font-weight: 700;
  }
`;
