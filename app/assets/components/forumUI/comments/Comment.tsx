import useUsersStore from "@/app/stores/usersStores";
import { CommentProps } from "@/app/types/components";
import { Avatar } from "@radix-ui/themes";

export default function Comment({ userId, content, date }: CommentProps) {
	const users = useUsersStore((state) => state.usersList);

	const userInfo = users.find((user) => user.id === userId);

	if (userInfo)
		return (
			<div className="flex items-center text-lg p-1">
				<span>{content}</span>

				<div className="rounded-full bg-green-600 w-1 h-1 m-2"></div>
				<div className="flex gap-2">
					<div className="flex flex-col text-xs gap-2 items-end text-[#848484]">
						<strong>{userInfo.username}</strong>
						<div>{date}</div>
					</div>
					<Avatar radius="full" src={userInfo.avatar} fallback={""} />
				</div>
			</div>
		);
}
