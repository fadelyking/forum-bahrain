import categories from "../mocks/categories";
import { create } from "zustand";
import { CategoriesStore } from "../types/stores";
const useCategoriesStore = create<CategoriesStore>(() => ({
	categoriesList: categories,
}));

export default useCategoriesStore;
