import { useState } from "react";
import { useRouter } from "next/router";

function EventList({ eventList }) {
  const [events, setevents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setevents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };

  return (
    <>
      <h1>List of events</h1>
      <button onClick={fetchSportsEvents}>Sport event</button>

      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title} {event.date} | {event.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  // console.log(category);
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}

export default EventList;
