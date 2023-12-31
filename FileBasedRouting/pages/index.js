import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getFeaturedEvents } from "@/helpers/api-util";
import Head from "next/head";
import Link from "next/link";
function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Next Js Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve ..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
