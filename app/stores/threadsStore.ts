import threads from "../mocks/threads";
import { create } from "zustand";

const useThreadsStore = create(() => ({
	threadsList: threads,
}));

export default useThreadsStore;
