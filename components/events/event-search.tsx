import { useRef } from 'react';
import Button from '../ui/button';

interface EventSearchProps {
	onSearch: (year: string, month: string) => void;
}

const EventSearch = (props: EventSearchProps) => {
	const yearInputRef = useRef<HTMLSelectElement>(null);
	const monthInputRef = useRef<HTMLSelectElement>(null);
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const selectedYear = yearInputRef.current?.value as string;
		const selectedMonth = monthInputRef.current?.value as string;

		props.onSearch(selectedYear, selectedMonth);
	};
	return (
		<form
			className='mx-auto my-[2rem] shadow-c2 p-[1rem] bg-white rounded-[6px] w-[90%] max-w-[40rem] flex content-between flex-col gap-[1rem] md:flex-row'
			onSubmit={submitHandler}>
			<div className='w-[100%] flex gap-[1rem] flex-col md:w-[80%] md:flex-row'>
				<div className='flex-[1] flex gap-[1rem] items-center justify-between'>
					<label className='font-bold' htmlFor='year'>
						Year
					</label>
					<select
						className='bg-white rounded-[6px] w-[70%] p-[0.25rem] md:w-[100%]'
						id='year'
						ref={yearInputRef}>
						<option value='2021'>2021</option>
						<option value='2022'>2022</option>
					</select>
				</div>
				<div className='flex-[1] flex gap-[1rem] items-center justify-between'>
					<label className='font-bold' htmlFor='month'>
						Month
					</label>
					<select
						className='bg-white rounded-[6px] w-[70%] p-[0.25rem] md:w-[100%]'
						id='month'
						ref={monthInputRef}>
						<option value='1'>January</option>
						<option value='2'>February</option>
						<option value='3'>March</option>
						<option value='4'>April</option>
						<option value='5'>May</option>
						<option value='6'>June</option>
						<option value='7'>July</option>
						<option value='8'>August</option>
						<option value='9'>September</option>
						<option value='10'>October</option>
						<option value='11'>November</option>
						<option value='12'>December</option>
					</select>
				</div>
			</div>
			<div className='w-[100%] px-[0.5rem] py-[0.25rem] md:w-[20%]'>
				<Button>Find Events</Button>
			</div>
		</form>
	);
};

export default EventSearch;
