import { Inter } from 'next/font/google';
import styles from './page.module.css';
/**
 * page.tsx
 * unique UI at each Components
 * basic props
 * apply "params", "searchParams"
 */

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <main className={styles.main}></main>;
}
