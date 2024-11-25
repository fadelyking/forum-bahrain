import categories from "../mocks/categories";
import { create } from "zustand";

const useCategoriesStore = create(() => ({
	categoriesList: categories,
}));

export default useCategoriesStore;
