import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Header from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Header />
      <p>Home Page</p>
    </main>
  );
}
