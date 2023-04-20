import { SITE_CONFIG } from '../../site.config';
export const GA_TRACKING_ID = SITE_CONFIG.gaConfig;

export const pageview = (url: string) => {
  if (typeof window !== 'object') return;
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

type GAEventType = {
  action: string;
  category: string;
  label: string;
  value: string;
};
export const event = ({ action, category, label, value }: GAEventType) => {
  if (typeof window !== 'object') return;
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
