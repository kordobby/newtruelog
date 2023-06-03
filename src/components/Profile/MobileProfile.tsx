'use client';

import { SITE_CONFIG } from '@/../site.config';
import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';
import Image from 'next/image';

const MobileProfile = () => {
  return (
    <MobileProfileWrapper>
      <div className="profile-wrapper">
        {/* <div className="image">dd</div> */}
        <Image
          src="/leetrue.PNG"
          width={80}
          height={80}
          loading="eager"
          priority={true}
          alt="profile image"
          style={{ borderRadius: '8px' }}
        />
        <div className="profile-info">
          <span className="profile_name">{SITE_CONFIG.profile.name}</span>
          <span className="profile_role">{SITE_CONFIG.profile.role}</span>
          <span className="profile_desc">{SITE_CONFIG.profile.desc}</span>
        </div>
      </div>
    </MobileProfileWrapper>
  );
};

export default MobileProfile;

const MobileProfileWrapper = styled.div`
  display: none;
  @media (max-width: 72rem) {
    display: block;
    background-color: ${colors.brand.blue};
    border-radius: 15px;
    font-size: 14px;
    /* width: 100; */
    padding: 18px 18px;
    margin: 15px 0px;
  }
  .profile-wrapper {
    display: flex;
    align-items: center;
    .image {
      width: 80px;
      height: 80px;
      background-color: yellow;
    }
    .profile-info {
      display: flex;
      flex-direction: column;
      padding-left: 18px;
      span {
        color: ${colors.brand.white};
      }
      .profile_name {
        ${utilFonts('subtitle')};
        /* margin-top: 15px; */
        margin-bottom: 4px;
        font-size: 18px;
      }
      .profile_role,
      .profile_desc {
        ${utilFonts('normal-m')};
        font-weight: 600;
      }
      .profile_role {
        margin-bottom: 15px;
      }
    }
  }
`;
