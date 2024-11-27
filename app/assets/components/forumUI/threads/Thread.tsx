"use client";
import useThreadsStore from "@/app/stores/threadsStore";
import { ThreadProps } from "@/app/types/components";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

export default function Thread({ threadId }: ThreadProps) {
	const { currentThread, getThread } = useThreadsStore(
		useShallow((state) => ({
			currentThread: state.currentThread,
			getThread: state.getThread,
		}))
	);

	useEffect(() => {
		if (threadId) {
			getThread(threadId);
			console.log(getThread(threadId));
		}
	}, [threadId, getThread]);

	if (!currentThread) {
		return <div>Loading...</div>; // Show loading state while fetching the thread
	}
	return (
		<div>
			<div className="text-white">{currentThread?.title}</div>
		</div>
	);
}
