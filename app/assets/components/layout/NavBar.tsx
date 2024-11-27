import { SunIcon } from "@radix-ui/react-icons";
import ForumButton from "../common/Button";
import LoginDialog from "../common/LoginDialog";

export default function NavBar() {
	return (
		<div className="bg-[#272727] p-5 px-20 flex col-start-1 col-span-full justify-end items-center">
			<ul className="noto_kufi flex gap-5 text-white items-center">
				<li className="hover:text-[#2bad73] cursor-pointer">
					الأكثر تداولاً
				</li>
				{/* Trending */}
				<li className="hover:text-[#2bad73] cursor-pointer">
					منشورات جديدة
				</li>
				{/* New Posts */}
				<li className="hover:text-[#2bad73] cursor-pointer">نشاطك</li>
				{/* Your Activity */}
				<li className="hover:text-[#2bad73] cursor-pointer">
					<LoginDialog />
				</li>
				{/* Login/Profile */}
				<li className=" cursor-pointer">
					<ForumButton>أنشئ منشوراً جديد</ForumButton>
				</li>
				{/* Create New Thread */}
				<li className="hover:text-[#2bad73] cursor-pointer">
					<SunIcon />
				</li>
				{/* Theme Toggle */}
			</ul>
		</div>
	);
}
