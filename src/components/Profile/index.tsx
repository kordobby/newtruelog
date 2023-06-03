'use client';

import { utilFonts } from '@/libs/global/fonts';
import { colors } from '@/libs/global/palette';
import styled from 'styled-components';
import { SITE_CONFIG } from '@/../site.config';
import Image from 'next/image';

const Profile = () => {
  return (
    <ProfileWrapper>
      <h3>Profile</h3>
      <div className="profile">
        <Image
          src="/leetrue.PNG"
          width={165}
          height={165}
          alt="profile image"
          loading="eager"
          priority={true}
          style={{ borderRadius: '8px' }}
        />
        <span className="profile_name">{SITE_CONFIG.profile.name}</span>
        <span className="profile_role">{SITE_CONFIG.profile.role}</span>
        <span className="profile_desc">{SITE_CONFIG.profile.desc}</span>
      </div>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  background-color: ${colors.brand.blue};
  border-radius: 15px;
  font-size: 14px;
  width: 190px;
  padding: 15px 18px 32px 18px;
  margin: 15px 0px;

  h3 {
    ${utilFonts('subtitle')};
    color: ${colors.brand.white};
    font-size: 18px;
    margin-bottom: 4px;
  }

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    span {
      color: ${colors.brand.white};
    }
    .profile_name {
      ${utilFonts('subtitle')};
      margin-top: 15px;
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
  .profile_image {
    background-color: white;
    height: 165px;
    width: 165px;
  }
`;

export default Profile;
