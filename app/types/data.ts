export type Comment = {
	id: number;
	user_id: number;
	thread_id: number;
	created_at: Date;
	content: string;
};

export type Comments = {
	id: number;
	user_id: number;
	thread_id: number;
	created_at: Date;
	content: string;
}[];

export type Category = {
	id: number;
	name: string;
	icon: string;
	description: string;
	created_at: Date;
}[];

export type Thread = {
	id: number;
	category: number;
	title: string;
	user_id: number;
	content: string;
	created_at: Date;
	likes: number;
	comments_count: number;
}[];

export type User = {
	id: number;
	username: string;
	password: string;
	avatar: string;
	bio: string;
	role: number;
	donations?: number[]; // Optional if donations might not exist
	created_at: Date;
	updated_at: Date;
}[];
