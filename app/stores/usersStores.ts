import users from "../mocks/users";
import { UsersStore } from "../types/stores";
import { create } from "zustand";

const useUsersStore = create<UsersStore>(() => ({
	usersList: users,
}));

export default useUsersStore;
