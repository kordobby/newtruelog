import './globals.css';
import { SITE_CONFIG } from '../../site.config';
import Script from 'next/script';

export const metadata = {
  ...SITE_CONFIG.meta,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={SITE_CONFIG.meta.lang}>
      <Script />
      <body>{children}</body>
    </html>
  );
}
