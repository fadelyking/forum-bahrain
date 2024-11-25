"use client";

import useThreadsStore from "@/app/stores/threadsStore";
import { v4 as uuidv4 } from "uuid";
import ThreadCard from "../forumUI/threads/ThreadCard";
import formatDate from "@/app/utils/dateFormatter";
import useCommentsStore from "@/app/stores/commentsStore";

export default function MainContent() {
	const threads = useThreadsStore((state) => state.threadsList);
	const comments = useCommentsStore((state) => state.commentsList);
	if (threads) {
		return (
			<div className="noto_kufi col-start-3 col-end-6  max-w-full">
				<ul className="noto_kufi flex flex-col gap-3 font-bold justify-end items-end text-sm p-5 bg-[#272727] text-[#bdbdbd] rounded-lg">
					{threads.map((thread) => (
						<li key={uuidv4()}>
							<ThreadCard
								userId={thread.user_id}
								title={thread.title}
								content={thread.content}
								created={formatDate(thread.created_at)}
								likes={thread.likes}
								comments={comments}
							/>
						</li>
					))}
				</ul>
			</div>
		);
	} else {
		return "No threads currently";
	}
}
