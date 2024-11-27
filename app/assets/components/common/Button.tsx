import { ButtonProps } from "@/app/types/components";

export default function ForumButton({ children }: ButtonProps) {
	return (
		<button className=" p-2 px-11 rounded-md bg-[#458b60] hover:bg-[#5aa276] text-xs">
			{children}
		</button>
	);
}
