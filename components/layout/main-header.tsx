import Link from 'next/link';

const MainHeader = () => {
	return (
		<header className='w-[100%] flex justify-between items-baseline px-[10%] py-[1rem] h-[5rem] bg-gray-800'>
			<div className='logo text-2xl h-[100%] flex justify-center items-center text-cyan-200 md:text-4xl'>
				<Link href='/' className='no-underline text-cyan-200'>
					Events
				</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link href='/events' className='no-underline text-xl text-cyan-400 md:text-2xl'>
							Browse All Events
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
