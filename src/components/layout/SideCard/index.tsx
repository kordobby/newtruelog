import { SITE_CONFIG } from '@/../site.config';
import BrandContent from './BrandContent';
import { SideCardWrapper } from './SideCard.styles';

interface SideCardProps {
  category: 'contact' | 'service';
}

const SideCard = ({ category }: SideCardProps) => {
  const { contact, service } = SITE_CONFIG;
  const isContact = category === 'contact';
  return (
    <SideCardWrapper isContact={isContact}>
      <h3>{category}</h3>
      {(isContact ? contact : service).map((value, index) => {
        return (
          <BrandContent
            key={`contact-${value.name}-${index}`}
            sns={value.name}
            linkName={value.href}
            isContact={isContact}
          />
        );
      })}
    </SideCardWrapper>
  );
};

export default SideCard;
