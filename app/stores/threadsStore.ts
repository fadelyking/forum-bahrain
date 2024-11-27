import threads from "../mocks/threads";
import { create } from "zustand";
import { ThreadsStore } from "../types/stores";
const useThreadsStore = create<ThreadsStore>(() => ({
	threadsList: threads,
}));

export default useThreadsStore;
