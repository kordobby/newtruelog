import { CONFIG } from '@/seo.config';
import { use, useEffect } from 'react';

export const useUtterances = (issueTerm: string) => {
  useEffect(() => {
    const theme = 'github-light';
    const script = document.createElement('script');
    const anchor = document.getElementById('comments');
    if (!anchor) return;

    script.setAttribute('src', 'https://utteranc.es/client.js');
    script.setAttribute('crossorigin', 'anonymous');
    script.setAttribute('async', `true`);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('theme', theme);
    const config: { [key: string]: string } = CONFIG.utterances.config;
    Object.keys(config).forEach((key) => {
      script.setAttribute(key, config[key]);
    });
    anchor.appendChild(script);
    return () => {
      anchor.innerHTML = '';
    };
  }, []);
  return {};
};
