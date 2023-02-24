import { EventData } from '@/dummy-data';
import Button from '../ui/button';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import DateIcon from '../icons/date-icon';

const EventItem = ({ id, title, description, location, date, image, isFeatured }: EventData) => {
	const formattedDate: string = new Date(date).toLocaleDateString('hu-HU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});

	const formattedAddress: string = location.replace(', ', '\n');

	const exploreLink: string = `/events/${id}`;

	return (
		<li className='shadow-c1 rounded-[8px] overflow-hidden bg-white m-[1rem] flex flex-col gap-[1rem] md:flex-row'>
			<img
				src={'/' + image}
				alt={title}
				className='w-[100%] object-cover h-[10rem] md:w-[40%] md:h-[14rem]'
			/>
			<div className='w-[100%] px-[1rem] py-0 text-center md:w-[60%] md:p-0 md:text-left'>
				<div>
					<h2 className='mx-0 my-[0.5rem] md:mx-0 md:my-[1rem]'>{title}</h2>
					<div className='flex gap-[0.5rem] items-center'>
						<DateIcon />
						<time className='text-gray-500 font-bold'>{formattedDate}</time>
					</div>
					<div className='flex gap-[0.5rem] items-center'>
						<AddressIcon />
						<address className='text-gray-500 mx-0 my-[0.5rem] whitespace-pre'>
							{formattedAddress}
						</address>
					</div>
				</div>
				<div className='flex flex-col p-[1rem] md:flex-row md:justify-end'>
					<Button link={exploreLink}>
						<span className='align-middle'>Explore Event</span>
						<span className='align-middle ml-[0.5rem] inline-flex justify-center items-center'>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
};

export default EventItem;
