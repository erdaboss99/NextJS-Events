import classes from './error-alert.module.css';

interface ErrorAlertProps {
	children: React.ReactNode;
}

function ErrorAlert(props: ErrorAlertProps) {
	return (
		<div className='mx-auto my-[1rem] px-[2rem] py-[1rem] w-[90%] max-w-[40rem] bg-purple-300 text-blue-800 font-bold text-2xl text-center rounded-[6px]'>
			{props.children}
		</div>
	);
}

export default ErrorAlert;
