import Link from 'next/link';
import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <h1>There is no place like home</h1>
      <Link href='/about'>About page</Link>
    </Layout>
  );
}
