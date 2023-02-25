interface EventContentProps {
	children: React.ReactNode;
}

const EventContent = (props: EventContentProps) => {
	return (
		<section className='text-gray-700 text-2xl w-[90%] max-w-[40em] m-auto mt-[8rem] text-center'>
			{props.children}
		</section>
	);
};

export default EventContent;
