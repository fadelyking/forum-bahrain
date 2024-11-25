import comments from "../mocks/comments";
import { create } from "zustand";

const useCommentsStore = create(() => ({
	commentsList: comments,
}));

export default useCommentsStore;
