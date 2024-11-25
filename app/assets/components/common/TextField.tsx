export default function SearchBar() {
	return (
		<form action="post" className="flex items-center justify-center">
			<input
				type="text"
				placeholder="...ابحث عن موضوع"
				className="placeholder:text-end p-1 max-w-52"
			/>
		</form>
	);
}
