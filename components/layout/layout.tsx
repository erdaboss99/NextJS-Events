import MainHeader from './main-header';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
	return (
		<>
			<MainHeader />
			<main>{props.children}</main>
		</>
	);
};

export default Layout;
