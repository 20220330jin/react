import EventItem from "./EventItem";

function EventList(props) {

    console.log(props);

    const {items} = props;
    console.log(items);

    return (
        <ul>
            {items.map(event => (
                <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date}
                           image={event.image}></EventItem>
            ))}
        </ul>
    )
}

export default EventList;
