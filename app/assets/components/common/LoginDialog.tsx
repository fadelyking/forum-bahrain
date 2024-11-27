import { Dialog } from "@radix-ui/themes";

export default function LoginDialog() {
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<span>تسجيل الدخول</span>
			</Dialog.Trigger>

			<Dialog.Content size="3" className="noto_kufi text-center">
				<Dialog.Title>سلام عليكم</Dialog.Title>
				<Dialog.Description size="2" mb="4">
					استخدم ايميلك او اي خدمة من الخدمات المتوفرة لتسجيل الدخول
				</Dialog.Description>

				<button>Continue with google</button>
			</Dialog.Content>
		</Dialog.Root>
	);
}
