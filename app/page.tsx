import SidebarLeft from "./assets/components/layout/SidebarLeft";
import MainContent from "./assets/components/layout/MainContent";
import NavBar from "./assets/components/layout/NavBar";
export default function Homepage() {
	return (
		<>
			<div className="grid grid-cols-7 gap-12">
				<NavBar />
				<MainContent />
				<SidebarLeft />
				{/*<SidebarRight />*/}
			</div>
		</>
	);
}
