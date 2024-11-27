"use client";
import useCommentsStore from "@/app/stores/commentsStore";
import useThreadsStore from "@/app/stores/threadsStore";
import useUsersStore from "@/app/stores/usersStores";
import Comment from "../comments/Comment";
import CreateComment from "../comments/CreateComment";
import { ThreadProps } from "@/app/types/components";
import formatDate from "@/app/utils/dateFormatter";
import { Avatar } from "@radix-ui/themes";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";
import { v4 as uuidv4 } from "uuid";
export default function Thread({ threadId }: ThreadProps) {
	const { currentThread, getThread } = useThreadsStore(
		useShallow((state) => ({
			currentThread: state.currentThread,
			getThread: state.getThread,
		}))
	);

	const users = useUsersStore((state) => state.usersList);
	const user = users.find((user) => user.id === currentThread?.user_id);

	const comments = useCommentsStore((state) => state.commentsList);
	const threadComments = comments.filter(
		(comment) => comment.thread_id === parseInt(threadId)
	);

	useEffect(() => {
		if (threadId) {
			getThread(threadId);
		}
	}, [threadId, getThread]);

	if (!currentThread || !user) {
		return <div>Loading...</div>; // Show loading state while fetching the thread
	}
	return (
		<div className="noto_kufi flex flex-col bg-[#2c2d2c] rounded-xl text-xl p-4 text-[#bdbdbd]">
			<div className="flex flex-col gap-5 p-3">
				<div className="flex gap-5 items-end justify-end text-end">
					<div className="flex flex-col gap-1 items-end">
						<div>{currentThread.title}</div>
						<div className="flex gap-2 text-xs items-center text-[#848484]">
							<span>{formatDate(currentThread.created_at)}</span>
							<div className="rounded-full bg-green-600 w-1 h-1"></div>
							<span>{user.username}</span>
						</div>
					</div>
					<div>
						<Avatar radius="full" src={user.avatar} fallback={""} />
					</div>
				</div>
				<div className="text-end">{currentThread.content}</div>
			</div>
			<CreateComment />
			<div className="bg-[#363737] p-3 rounded-md text-end items-end flex flex-col">
				<ul className="flex flex-col gap-3">
					{threadComments.map((comment) => (
						<li
							key={uuidv4()}
							className="flex justify-end items-center"
						>
							<Comment
								userId={comment.user_id}
								content={comment.content}
								date={formatDate(comment.created_at)}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
