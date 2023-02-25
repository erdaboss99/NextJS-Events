interface EventSummaryProps {
	title: string;
}

const EventSummary = (props: EventSummaryProps) => {
	return (
		<section className=' summary w-[100%] h-[30vh] bg-c1'>
			<h1 className='m-0 pt-[3rem] text-3xl text-center text-white md:text-7xl'>{props.title}</h1>
		</section>
	);
};

export default EventSummary;
