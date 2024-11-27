import comments from "../mocks/comments";
import { create } from "zustand";
import { CommentsStore } from "../types/stores";
const useCommentsStore = create<CommentsStore>(() => ({
	commentsList: comments,
}));

export default useCommentsStore;
