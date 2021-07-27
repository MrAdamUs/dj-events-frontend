import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '@/components/layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';

export default function SearchPage({ events }) {
  const router = useRouter();
  return (
    <Layout>
      <Link href='/events'>Go Back</Link>
      <h1>Shearsh Results for {router.query.term} </h1>
      {events.length === 0 && <h3>There is no Event</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });
  const reg = await fetch(`${API_URL}/events?${query}`);
  const events = await reg.json();

  return {
    props: { events },
  };
}
