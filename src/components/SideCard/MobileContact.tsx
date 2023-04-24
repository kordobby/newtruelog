import styled from 'styled-components';
import { SITE_CONFIG } from '@/../site.config';
import { colors } from '@/libs/global/palette';

const MobileContact = () => {
  return (
    <MobileContactWrapper>
      <div className="icon-wrapper">
        {SITE_CONFIG.contact.map((value, index) => {
          return (
            <div className="contact-icon" key={index}>
              {/* {value.name} */}
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
      }
    }
  }
`;
