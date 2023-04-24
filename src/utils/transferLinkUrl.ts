import { SITE_CONFIG } from '@/../site.config';

export type ContactType =
  | 'github'
  | 'linkedin'
  | 'careerly'
  | 'instagram'
  | 'twitter';

export const transferLinkUrl = (category: ContactType) => {
  const source = new Map([
    ['github', `https://github.com/${SITE_CONFIG.profile.github}`],
    ['linkedin', `https://www.linkedin.com/in/${SITE_CONFIG.profile.github}`],
    ['careerly', ''],
    ['instagram', `https://www.instagram.com/${SITE_CONFIG.profile.github}`],
    ['twitter', ''],
  ]);

  return source.get(category);
};
