import useUsersStore from "@/app/stores/usersStores";
import formatDate from "@/app/utils/dateFormatter";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { Avatar } from "@radix-ui/themes";

export default function ThreadCard({
	userId,
	title,
	likes,
	content,
	created,
	comments,
}) {
	const users = useUsersStore((state) => state.usersList);

	// Finding info
	const userInfo = users.find((user) => user.id === userId);

	let lastComment = null;
	if (comments?.length > 0) {
		lastComment = comments
			.slice()
			.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0];
	}
	const commenterInfo = users.find((user) => user.id === lastComment.user_id);

	if (userInfo)
		return (
			<div className="flex bg-[#2c2d2c] hover:outline hover:outline-2 hover:outline-[#2bad73] hover:cursor-pointer rounded-xl">
				<div className="flex flex-col gap-5 p-3">
					<div className="flex gap-5 items-end justify-end text-end">
						<div className="flex flex-col gap-1 items-end">
							<div>{title}</div>
							<div className="flex gap-2 text-xs items-center text-[#848484]">
								<span>{created}</span>
								<div class="rounded-full bg-green-600 w-1 h-1"></div>
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
						<div className="flex items-center gap-1 border-[#272727] rounded-2xl border-2 p-2">
							<HeartFilledIcon height={20} width={20} />
							{likes}
						</div>
					</div>
					<div className="bg-[#363737] p-3 rounded-lg text-end items-end flex flex-col gap-3">
						<span>{lastComment.content}</span>
						<div className="flex gap-2 items-center text-[#848484]">
							<div>{formatDate(commenterInfo?.created_at)}</div>
							<div class="rounded-full bg-green-600 w-1 h-1"></div>
							<strong>{commenterInfo?.username}</strong>
							<Avatar
								radius="full"
								src={commenterInfo?.avatar}
								fallback={""}
							/>
						</div>
					</div>
				</div>
			</div>
		);
}
