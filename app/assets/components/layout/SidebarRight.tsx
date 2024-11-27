import { Box } from "@radix-ui/themes";
import Sponser from "../forumUI/widgets/Sponser";
import RecentThreads from "../forumUI/widgets/RecentThreads";

export default function SidebarRight() {
	return (
		<div className="flex flex-col col-start-2 row-start-2 gap-6">
			<Box className="flex bg-[#272727] rounded-lg">
				<Sponser />
				{/* Today's Sponser */}
				{/* Active Members or Moderators */}
				{/* Local Businesses */}
				{/* Forum Stats */}
				{/* Daily Poll  */}
				{/* Online Members */}
			</Box>
			<Box className="bg-[#272727] rounded-lg">
				<RecentThreads />
				{/* Active Members or Moderators */}
				{/* Local Businesses */}
				{/* Forum Stats */}
				{/* Daily Poll  */}
				{/* Online Members */}
			</Box>
		</div>
	);
}
