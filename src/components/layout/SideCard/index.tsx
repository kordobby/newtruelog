import { SITE_CONFIG } from '@/../site.config';
import BrandContent from './BrandContent';
import { SideCardWrapper } from './SideCard.styles';

const SideCard = () => {
  return (
    <SideCardWrapper>
      <h3>contact</h3>
      {SITE_CONFIG.contact.map((value, index) => {
        return (
          <BrandContent
            key={`contact-${value.name}`}
            sns={value.name}
            userId={value.id}
          />
        );
      })}
    </SideCardWrapper>
  );
};

export default SideCard;
