export interface EventData {
	id: string;
	title: string;
	description: string;
	location: string;
	date: Date;
	image: string;
	isFeatured: boolean;
}

export interface DateFilterParameter {
	year: number;
	month: number;
}

const DUMMY_EVENTS: EventData[] = [
	{
		id: 'e1',
		title: 'Apple Keynote',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc nulla, semper sit amet euismod at, varius eu sapien.',
		location: 'Somestreet 25, 12345 San Somewhereo',
		date: new Date('2021-5-12'),
		image: 'images/apple-event.jpg',
		isFeatured: true,
	},
	{
		id: 'e2',
		title: 'New Mercedes Benz S-Class',
		description:
			'Aenean tempus et mi finibus semper. Curabitur in sem imperdiet, dictum mauris a, ullamcorper mauris.',
		location: 'New Wall Street 5, 98765 New Work',
		date: new Date('2021-05-30'),
		image: 'images/mercedesbenz-event.jpg',
		isFeatured: true,
	},
	{
		id: 'e3',
		title: 'Academy Awards',
		description:
			'Sed bibendum eget orci sit amet lacinia. Nulla lacus augue, sagittis nec aliquet vitae, facilisis in lacus.',
		location: 'My Street 12, 10115 Broke City',
		date: new Date('2022-04-10'),
		image: 'images/academyawards-event.jpg',
		isFeatured: false,
	},
];

export function getFeaturedEvents() {
	return DUMMY_EVENTS.filter((event: EventData) => event.isFeatured);
}

export function getAllEvents() {
	return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter: DateFilterParameter) {
	const { year, month } = dateFilter;

	let filteredEvents = DUMMY_EVENTS.filter((event: EventData) => {
		const eventDate: Date = new Date(event.date);
		return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
	});

	return filteredEvents;
}

export function getEventById(id: string) {
	return DUMMY_EVENTS.find((event: EventData) => event.id === id);
}
