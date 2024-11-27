import SidebarLeft from "./assets/components/layout/SidebarLeft";
import MainContent from "./assets/components/layout/MainContent";
import NavBar from "./assets/components/layout/NavBar";
import SidebarRight from "./assets/components/layout/SidebarRight";

export default function Homepage() {
	return (
		<>
			<div className="grid grid-cols-7 gap-6">
				<NavBar />
				<MainContent />
				<SidebarLeft />
				<SidebarRight />
			</div>
		</>
	);
}
