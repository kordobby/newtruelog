'use client';

import { IBM_ITALIC_B, utilFonts } from '@/libs/global/fonts';
import styled from 'styled-components';
import { SITE_CONFIG } from '@/../site.config';

const Logo = () => {
  return (
    <LogoWrapper className={IBM_ITALIC_B.className}>
      <span>{SITE_CONFIG.blog.title}</span>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  ${utilFonts('logo')};
`;
