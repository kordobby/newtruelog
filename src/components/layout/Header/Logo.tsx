'use client';

import { IBM_ITALIC_B, utilFonts } from '@/libs/global/fonts';
import styled from 'styled-components';
import { SITE_CONFIG } from '@/../site.config';
import { colors } from '@/libs/global/palette';
import { useRouter } from 'next/navigation';

type HeaderLogoTypes = 'logo' | 'about';

const Logo = ({ types }: { types: HeaderLogoTypes }) => {
  const route = useRouter();
  const subLogo = types === 'about';
  const moveScreen = () => {
    if (subLogo) {
      route.push('/about');
    } else {
      route.push('/');
    }
  };

  if (subLogo) {
    return (
      <LogoWrapper orange onClick={moveScreen}>
        <span>about</span>
      </LogoWrapper>
    );
  }
  return (
    <LogoWrapper>
      <span>{SITE_CONFIG.blog.title}</span>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div<{ orange?: boolean }>`
  ${utilFonts('logo')};
  display: flex;
  align-items: flex-end;
  padding-bottom: 1rem;
  cursor: pointer;
  span {
    font-size: ${({ orange }) => (orange ? 24 : 28)}px;
  }
  color: ${({ orange }) => (orange ? colors.brand.orange : colors.brand.white)};
`;
