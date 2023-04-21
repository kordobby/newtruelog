import './globals.css';
import { SITE_CONFIG } from '../../site.config';
import Script from 'next/script';
import Layout from '@/components/layout/Layout';
import StyledComponentsRegistry from '@/libs/global/registry';
import Header from '@/components/layout/Header';
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
        <StyledComponentsRegistry>
          <Header />
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
