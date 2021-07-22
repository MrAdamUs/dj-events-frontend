import { useRouter } from 'next/router';
import Layout from '../../components/layout';
function EventsPage() {
  const router = useRouter();

  console.log(router);
  return (
    <Layout>
      <h1>My Event</h1>
      <h3>{router.query.slug}</h3>
      <button onClick={() => router.push('/')}>Home</button>
    </Layout>
  );
}

export default EventsPage;
