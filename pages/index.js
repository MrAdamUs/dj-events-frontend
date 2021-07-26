import Layout from '@/components/layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';
import Link from 'next/link';

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Up Coming Events</h1>
      {events.length === 0 && <h3>There is no Event</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <a className='btn-secondary'> view all Event</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const reg = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await reg.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
