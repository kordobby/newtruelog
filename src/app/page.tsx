import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Header from '@/components/layout/Header';
import Column from '@/components/layout/Layout/Column';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <Column />
      {/* <p>Home Page</p> */}
    </main>
  );
}
