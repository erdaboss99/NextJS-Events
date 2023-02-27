import Button from '../ui/button';

interface ResultsTitleProps {
	date: Date;
}

const ResultsTitle = (props: ResultsTitleProps) => {
	const formattedDate: string = new Date(props.date).toLocaleDateString('hu-HU', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<section className='mx-auto my-[2rem] w-[90%] max-w-[40rem] text-center'>
			<h1>Events in {formattedDate}</h1>
			<Button link='/events'>Show all events</Button>
		</section>
	);
};

export default ResultsTitle;
