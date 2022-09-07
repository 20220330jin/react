import {getFeaturedEvents} from "../helpers/api-util";
import EventList from "../components/events/EventList";

function HomePage(props) {
    console.log(props);

    return (
        <div>
            <EventList items={props.events}></EventList>
        </div>
    )
}

export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    console.log(featuredEvents);
    return {
        props: {
            events: featuredEvents
        }
    }
}

export default HomePage;
