import { API_URL } from '@/config/index';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout';
import styles from '@/styles/Event.module.css';
import { useRouter } from 'next/router';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EventPage({ evt }) {
  const router = useRouter();

  return (
    <Layout>
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
              alt={evt.name}
            />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{evt.performers}</p>
        <h3>Descriptio:</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href='/events'>
          <a className={styles.back}>{'<'} GO Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events/?slug=${slug}`);
  const events = await res.json();

  console.log(res);
  return {
    props: {
      evt: events[0],
    },
  };
}
