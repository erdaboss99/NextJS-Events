import AddressIcon from '../icons/address-icon';
import DateIcon from '../icons/date-icon';
import LogisticsItem from './logistics-item';

interface EventLogisticsProps {
	date: Date;
	location: string;
	image: string;
	imageAlt: string;
}

const EventLogistics = (props: EventLogisticsProps) => {
	const formattedDate = new Date(props.date).toLocaleDateString('hu-HU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const formattedAddress: string = props.location.replace(', ', '\n');

	return (
		<section className='shadow-c3 rounded-[6px] bg-gray-800 p-[2rem] max-w-[50rem] w-[80%] mx-auto my-[-3rem] text-cyan-100 flex justify-between gap-[1rem] flex-col items-center md:p-[2rem] md:mx-auto md:my-[-5rem] md:gap-[3rem] md:flex-row md:items-stretch'>
			<div className='w-[10rem] h-[10rem] rounded-[50%] overflow-hidden border-[5px] border-solid border-white md:w-[20rem] md:h-[20rem]'>
				<img
					src={`/${props.image}`}
					alt={props.imageAlt}
					className='w-[10rem] h-[10rem] object-cover md:w-[20rem] md:h-[20rem]'
				/>
			</div>
			<ul className='flex-[3] flex gap-[2rem] justify-center items-center flex-col md:items-start'>
				<LogisticsItem icon={DateIcon}>
					<time>{formattedDate}</time>
				</LogisticsItem>
				<LogisticsItem icon={AddressIcon}>
					<address className='whitespace-pre'>{formattedAddress}</address>
				</LogisticsItem>
			</ul>
		</section>
	);
};

export default EventLogistics;
