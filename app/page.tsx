import SidebarLeft from "./assets/components/layout/SidebarLeft";
import MainContent from "./assets/components/layout/MainContent";
export default function Homepage() {
	return (
		<div className="grid grid-cols-7 gap-12">
			<MainContent />
			<SidebarLeft />
			{/*<SidebarRight />*/}
		</div>
	);
}
