import Thread from "@/app/assets/components/forumUI/threads/Thread";

export default async function ThreadPage({
	params,
}: {
	params: Promise<{ slug: object; threadid: number }>;
}) {
	const slug = await params;
	return (
		<div className=" col-start-3 row-start-2">
			<Thread threadId={slug.threadid} />
		</div>
	);
}
