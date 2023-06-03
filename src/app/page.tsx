import { Inter } from 'next/font/google';
import Column from '@/components/layout/Layout/Column';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      {/* @ts-expect-error Server Component */}
      <Column />
    </main>
  );
}
