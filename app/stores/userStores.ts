import users from "../mocks/users";
import { create } from "zustand";

const useUsersStore = create(() => ({
	usersList: users,
}));

export default useUsersStore;
