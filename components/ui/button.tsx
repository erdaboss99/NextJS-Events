import Link from 'next/link';

interface ButtonProps {
	link?: string;
	children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
	if (props.link) {
		return (
			<Link
				href={props.link}
				className='block align-middle no-underline cursor-pointer bg-cyan-500 border-solid border-[1px] border-cyan-500 rounded-[6px] text-cyan-100 px-[1.5rem] py-[0.5] text-center shadow-c2 hover:bg-cyan-700 hover:border-cyan-700 active:bg-cyan-700 active:border-cyan-700'>
				{props.children}
			</Link>
		);
	}

	return (
		<button className='block align-middle no-underline cursor-pointer bg-cyan-500 border-solid border-[1px] border-cyan-500 rounded-[6px] text-cyan-100 px-[1.5rem] py-[0.5] text-center shadow-c2 hover:bg-cyan-700 hover:border-cyan-700 active:bg-cyan-700 active:border-cyan-700'>
			{props.children}
		</button>
	);
};

export default Button;
