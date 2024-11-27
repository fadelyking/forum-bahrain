export default function CreateComment() {
	return (
		<div className="noto_kufi flex items-center justify-end py-3 gap-3">
			<textarea
				name="comments"
				className="text-sm placeholder:text-sm text-end bg-[#363737] p-3 rounded-md w-full"
				placeholder="...اترك تعليق"
			/>
			<button className="p-3 rounded-md bg-[#458b60] text-white hover:bg-[#5aa276] text-xs">
				ارسل
			</button>
		</div>
	);
}
