import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../libs/gtag';

const useGtagScript = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return;
};

export default useGtagScript;
