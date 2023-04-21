import './globals.css';
import { SITE_CONFIG } from '../../site.config';
import Script from 'next/script';
import Layout from '@/components/layout/Layout/Layout';
export const metadata = {
  ...SITE_CONFIG.meta,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Script />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
