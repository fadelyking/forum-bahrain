"use client";

import useThreadsStore from "@/app/stores/threadsStore";
import { v4 as uuidv4 } from "uuid";
import ThreadCard from "../forumUI/threads/ThreadCard";
import formatDate from "@/app/utils/dateFormatter";
import useCommentsStore from "@/app/stores/commentsStore";
import Link from "next/link";

export default function MainContent() {
	const threads = useThreadsStore((state) => state.threadsList);
	const comments = useCommentsStore((state) => state.commentsList);
	if (threads) {
		return (
			<div className="noto_kufi col-start-3 col-end-6 ">
				<ul className="noto_kufi flex flex-col gap-3 font-bold justify-end items-end text-sm p-5 bg-[#272727] text-[#bdbdbd] rounded-lg">
					{threads.map((thread) => (
						<li key={uuidv4()}>
							<Link
								href={`category/${thread.category}/thread/${thread.id}`}
							>
								<ThreadCard
									userId={thread.user_id}
									title={thread.title}
									content={thread.content}
									created={formatDate(thread.created_at)}
									likes={thread.likes}
									comments={comments}
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		);
	} else {
		return "No threads currently";
	}
}
