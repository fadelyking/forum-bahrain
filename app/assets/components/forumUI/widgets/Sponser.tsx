"use client";
import useUsersStore from "@/app/stores/usersStores";
import { Avatar } from "@radix-ui/themes";

export default function Sponser() {
	const users = useUsersStore((state) => state.usersList);
	const donator = users.find(
		(user) => user.donations && user.donations.length >= 1
	);
	const totalDonations = donator?.donations?.reduce((a, b) => a + b, 0);

	if (donator)
		return (
			<div className="noto_kufi flex flex-col p-6 gap-3 items-center justify-end">
				<div className="text-[#848484]">المنتدى اليوم برعاية</div>
				<div className="flex items-center gap-5">
					<div className="flex flex-col gap-1  items-center">
						<span className=" text-orange-300">
							{donator.username}
						</span>
						<span className=" text-[#458b60]">
							{totalDonations}$
						</span>
					</div>
					<Avatar radius="full" src={donator.avatar} fallback={""} />
				</div>

				<div className="text-white bg-[#2c2d2c] text-sm text-end p-4 rounded-lg">
					{donator.bio}
				</div>
			</div>
		);
}
