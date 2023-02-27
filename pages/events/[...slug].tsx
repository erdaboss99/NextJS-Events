import { useRouter } from 'next/router';

import { getFilteredEvents, EventData } from '@/dummy-data';
import EventList from '@/components/events/event-list';
import ResultsTitle from '@/components/events/results-title';
import Button from '@/components/ui/button';

const FilteredEventsPage = () => {
	const router = useRouter();

	const filteredData = router.query.slug;

	if (!filteredData) {
		return <p className='center'>Loading...</p>;
	}

	const filteredYear: number = +filteredData[0];
	const filteredMonth: number = +filteredData[1];

	if (
		isNaN(filteredYear) ||
		isNaN(filteredMonth) ||
		filteredYear > 2030 ||
		filteredYear < 2000 ||
		filteredMonth < 1 ||
		filteredMonth > 12
	) {
		return <p>Invalid filted. Please adjust your values!</p>;
	}

	const filteredEvents: EventData[] = getFilteredEvents({
		year: filteredYear,
		month: filteredMonth,
	});

	if (!filteredEvents || filteredEvents.length === 0) {
		return (
			<>
				<p>No events found for the chosen filter!</p>
				<div className='center w-[20%]'>
					<Button link='/events'>Show All Events</Button>
				</div>
			</>
		);
	}
	return (
		<>
			<ResultsTitle date={new Date(filteredYear, filteredMonth - 1)} />
			<EventList events={filteredEvents} />
		</>
	);
};

export default FilteredEventsPage;
