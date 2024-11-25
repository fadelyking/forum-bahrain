import useUsersStore from "@/app/stores/userStores";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/themes";

export default function ThreadCard({ userId, title, likes, content, created }) {
	const users = useUsersStore((state) => state.usersList);
	const userInfo = users.find((user) => user.id === userId);
	if (userInfo)
		return (
			<div className="flex border-2 border-black bg-[#2c2d2c]">
				<div className="flex flex-col gap-5 p-3">
					<div className="flex gap-5 items-end justify-end text-end">
						<div className="flex flex-col gap-1 items-end">
							<div>{title}</div>
							<div className="flex gap-2 text-xs text-[#848484]">
								<span>{created}</span>
								<span>{userInfo.username}</span>
							</div>
						</div>
						<div>
							<Avatar
								radius="full"
								src={userInfo.avatar}
								fallback={""}
							/>
						</div>
					</div>
					<div className="text-end">{content}</div>
					<div className="flex">
						<div className="flex items-center gap-1 border-black rounded-2xl border-2 p-2">
							<HeartFilledIcon height={20} width={20} />
							{likes}
						</div>
					</div>
				</div>
			</div>
		);
}
