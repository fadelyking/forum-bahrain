"use client";
import useCategoriesStore from "@/app/stores/categoriesStore";
import { Box } from "@radix-ui/themes";
import { v4 as uuidv4 } from "uuid";
import ForumButton from "../common/Button";
import SearchBar from "../common/TextField";

export default function SidebarLeft() {
	const categories = useCategoriesStore((state) => state.categoriesList);

	return (
		<div className="col-start-6 col-span-1">
			<Box>
				<div className="flex items-end justify-end">
					<ul className="noto_kufi flex flex-col gap-3 font-bold justify-end items-end text-md p-6 bg-[#272727] text-[#bdbdbd] rounded-lg">
						<div className="flex flex-col gap-3 items-center justify-center">
							<ForumButton>
								<span className="text-white">
									أنشئ منشوراً جديد
								</span>
							</ForumButton>
						</div>
						{categories.map((category) => (
							<li
								key={uuidv4()}
								className="hover:text-white cursor-pointer text-end"
							>
								<span>{category.icon}</span>
								<span>{category.name}</span>
							</li>
						))}
					</ul>
				</div>
			</Box>
		</div>
	);
}
