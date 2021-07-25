import Layout from '@/components/layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>There is no Event</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const reg = await fetch(`${API_URL}/api/events`);
  const events = await reg.json();

  return {
    props: events,
    revalidate: 1,
  };
}
