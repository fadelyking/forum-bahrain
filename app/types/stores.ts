import { Category, Comment, Thread, Threads, User } from "./data";

export type CategoriesStore = {
	categoriesList: Category;
};

export type ThreadsStore = {
	currentThread: Thread | null;
	threadsList: Threads;
	getThread: (id: number) => void;
};

export type UsersStore = {
	usersList: User;
};

export type CommentsStore = {
	commentsList: Comment[];
};
