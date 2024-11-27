import { Comments } from "./data";

export type ButtonProps = {
	children: React.ReactNode;
};

export type ThreadCardProps = {
	userId: number;
	title: string;
	likes: number;
	content: string;
	created: string;
	comments: Comments;
};

export type ThreadProps = {
	threadId: number;
};

export type CommentProps = {
	userId: number;
	content: string;
	date: string;
};
