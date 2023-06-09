'use client';

import styled from 'styled-components';
import { SITE_CONFIG } from '@/../site.config';
import { colors } from '@/libs/global/palette';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGrinAlt,
} from 'react-icons/fa';

type ContactType = 'github' | 'careerly' | 'instagram' | 'linkedin' | 'twitter';
export const getContactIcon = (option: ContactType, full?: boolean) => {
  const style = { width: '28px', height: '28px', color: 'white' };
  const fullStyle = { width: '18px', height: '18px', color: 'white' };
  const iconStyle = full ? fullStyle : style;
  const optionsObj = {
    github: <FaGithub style={iconStyle} />,
    careerly: <FaGrinAlt style={iconStyle} />,
    instagram: <FaInstagram style={iconStyle} />,
    linkedin: <FaLinkedinIn style={iconStyle} />,
    twitter: <FaTwitter style={iconStyle} />,
  };
  return optionsObj?.[option];
};

const MobileContact = () => {
  return (
    <MobileContactWrapper>
      <div className="icon-wrapper">
        {SITE_CONFIG.contact.map((value, index) => {
          return (
            <div className="contact-icon" key={index}>
              {getContactIcon(value?.name as ContactType)}
            </div>
          );
        })}
      </div>
    </MobileContactWrapper>
  );
};

export default MobileContact;

const MobileContactWrapper = styled.div`
  display: none;
  @media (max-width: 72rem) {
    display: block;
    border-radius: 15px;
    font-size: 14px;
    margin-bottom: 30px;
    .icon-wrapper {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      .contact-icon {
        width: 50px;
        height: 50px;
        background-color: ${colors.brand.orange};
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
`;
