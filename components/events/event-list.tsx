import { EventData } from '@/dummy-data';

import EventItem from './event-item';

export interface EventListProps {
	events: EventData[];
}

const EventList = ({ events }: EventListProps) => {
	return (
		<ul className='w-[90%] max-w-[40rem] mx-auto my-[5rem]'>
			{events.map(({ id, title, description, location, date, image, isFeatured }) => (
				<EventItem
					key={id}
					id={id}
					title={title}
					description={description}
					location={location}
					date={date}
					image={image}
					isFeatured={isFeatured}
				/>
			))}
		</ul>
	);
};

export default EventList;
