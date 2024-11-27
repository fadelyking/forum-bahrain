"use client";
import useThreadsStore from "@/app/stores/threadsStore";
import formatDate from "@/app/utils/dateFormatter";

export default function RecentThreads() {
	const threads = useThreadsStore((state) => state.threadsList);

	// Get the last 3 threads (sorted by created_at or the array order)
	const recentThreads = threads
		.slice()
		.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at)) // Sort by date
		.slice(0, 2); // Get the latest 3

	return (
		<div className="noto_kufi p-6">
			<h2 className="text-[#848484] text-center pb-4">اخر المنشورات</h2>
			<div className="flex flex-col gap-4 text-end">
				{recentThreads.map((thread) => (
					<div
						key={thread.id}
						className="p-4 bg-[#363737] text-[#bdbdbd] rounded-lg shadow-lg hover:outline hover:outline-2 hover:outline-[#2bad73] hover:cursor-pointer"
					>
						<div className="flex flex-col gap-1">
							<h3 className="text-xs font-semibold">
								{thread.title}
							</h3>
							<p className="text-sm text-gray-400">
								{formatDate(thread.created_at)}
							</p>
						</div>
						<p className="text-sm mt-2">
							{thread.content.slice(0, 100)}...
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
