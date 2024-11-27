import { Category, Comment, Thread, User } from "./data";

export type CategoriesStore = {
	categoriesList: Category;
};

export type ThreadsStore = {
	threadsList: Thread;
};

export type UsersStore = {
	usersList: User;
};

export type CommentsStore = {
	commentsList: Comment[];
};
