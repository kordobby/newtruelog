'use client';

import { SITE_CONFIG } from '@/../site.config';
import useGtagScript from '@/hooks/useGtagScript';
import Script from 'next/script';

const GaScript = () => {
  useGtagScript();

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.gaConfig}`}
      />
      <Script id="ga" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${SITE_CONFIG.gaConfig}', {
              page_path: window.location.pathname,
            });`}
      </Script>
    </>
  );
};

export default GaScript;
