import threads from "../mocks/threads";
import { create } from "zustand";
import { ThreadsStore } from "../types/stores";
const useThreadsStore = create<ThreadsStore>((set) => ({
	currentThread: null,
	threadsList: threads,
	getThread: (id: any) => {
		const thread = threads.find((thread) => thread.id === parseInt(id));
		set({ currentThread: thread || null });
	},
}));

export default useThreadsStore;
