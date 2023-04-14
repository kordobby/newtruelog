import './globals.css';
import Meta, { MetaProps } from '../app/head';
/**
 * layout.tsx
 * shared UI in every Components
 * similar with _app, _document
 */

export default function RootLayout({
  metaConfig,
  children,
}: {
  children: React.ReactNode;
  metaConfig: MetaProps;
}) {
  return (
    <html>
      <Meta {...metaConfig} />
      <body>{children}</body>
    </html>
  );
}
