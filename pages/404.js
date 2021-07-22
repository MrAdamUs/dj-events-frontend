import Layout from '@/components/layout';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';
import styles from '@/styles/404.module.css';

function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          &nbsp; 404
        </h1>
        <h3>Sorry, Page Not Found</h3>
        <Link href='/'>Go Home</Link>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
