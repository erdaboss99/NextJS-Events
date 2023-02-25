interface LogisticsItemProps {
	icon: React.FC;
	children: React.ReactNode;
}

const LogisticsItem = (props: LogisticsItemProps) => {
	const Icon = props.icon;
	return (
		<li className='flex text-2xl items-center flex-col text-center text-cyan-200 md:items-start md:text-left'>
			<span className='block mr-[1rem] text-cyan-400 w-[2rem] h-[2rem]'>
				<Icon />
			</span>
			<span className='block'>{props.children}</span>
		</li>
	);
};

export default LogisticsItem;
