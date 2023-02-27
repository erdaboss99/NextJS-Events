import { useRouter } from 'next/router';

import { EventData, getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import EventSearch from '@/components/events/event-search';

const AllEventsPage = () => {
	const router = useRouter();
	const events: EventData[] = getAllEvents();

	const findEventsHandler = (year: string, month: string) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};

	return (
		<>
			<EventSearch onSearch={findEventsHandler} />
			<EventList events={events} />
		</>
	);
};

export default AllEventsPage;
