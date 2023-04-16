'use client';

import './globals.css';
import Meta, { MetaProps } from '../app/head';
import { RootStyleRegistry } from '../lib/RootStyleRegistry';
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
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
