import Head from 'next/head';
import styles from '../styles/Layout.module.css';
function Layout({ children, title, keywords, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  keywords: 'Find the latest DJ',
  description:
    'The React-based, server-side rendering, content management system.',
};

export default Layout;
