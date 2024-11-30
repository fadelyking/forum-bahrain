"use client";
import { useRef } from "react";
export default function LoginDialog({}) {
	function handleDialogChange() {
		loginDialogRef?.current?.close();
		emailDialogRef?.current?.showModal();
	}
	const loginDialogRef = useRef<HTMLDialogElement>(null);
	const emailDialogRef = useRef<HTMLDialogElement>(null);
	return (
		<>
			<button onClick={() => loginDialogRef?.current?.showModal()}>
				تسجيل دخول
			</button>
			<dialog
				ref={loginDialogRef}
				className="p-5 rounded-xl bg-[#272727] text-[#bdbdbd] text-xl translate-y-20 opacity-0
        transition-[opacity,transform] duration-300 backdrop:backdrop-blur-sm
        [&:not([open])]:pointer-events-none [&[open]]:translate-y-0 [&[open]]:opacity-100"
			>
				<div className="flex flex-col items-center gap-3 ">
					<div className="flex items-center justify-center  w-full">
						<button
							onClick={() => loginDialogRef?.current?.close()}
							className=" absolute right-4 top-4 text-xl bg-[#2c2d2c] p-1 py-0 rounded-md "
						>
							x
						</button>
						<h1 className=" font-bold">!سلام عليكم</h1>
					</div>
					<span className="text-sm">
						استخدم ايميلك او خدمة من الخدمات المتوفرة لتسجيل الدخول
					</span>
					<div className="flex flex-col gap-5 w-full p-5">
						<button className=" px-7 py-2 rounded-lg bg-[#2c2d2c]">
							Login with Google
						</button>
						<button className=" px-7 py-2 rounded-lg bg-[#2c2d2c]">
							Login with Apple
						</button>
						<button
							onClick={handleDialogChange}
							className=" px-7 py-2 rounded-lg text-[#272727] bg-[#bdbdbd]"
						>
							Login with Email
						</button>
					</div>
				</div>
			</dialog>
			<dialog
				ref={emailDialogRef}
				className="p-5 rounded-xl bg-[#272727] text-[#bdbdbd] text-xl translate-y-20 opacity-0
        transition-[opacity,transform] duration-300 backdrop:backdrop-blur-sm
        [&:not([open])]:pointer-events-none [&[open]]:translate-y-0 [&[open]]:opacity-100"
			>
				<button
					onClick={() => emailDialogRef?.current?.close()}
					className=" absolute right-4 top-4 text-xl bg-[#2c2d2c] p-1 py-0 rounded-md "
				>
					x
				</button>

				<form
					method="dialog"
					className="flex flex-col gap-4 items-center p-6 w-full max-w-md  rounded-lg"
				>
					<span className="text-lg font-semibold text-[#e0e0e0]">
						انشأ اكاونت جديد
					</span>
					<input
						type="text"
						placeholder="الاسم"
						className="w-full rounded-lg p-3 text-end bg-[#2c2d2c] text-[#e0e0e0] focus:ring focus:ring-[#3d3d3d] placeholder:text-[#9e9e9e] focus:outline-none shadow-sm"
						autoFocus
					/>
					<input
						type="tel"
						placeholder="رقم الجوال"
						className="w-full rounded-lg p-3 text-end bg-[#2c2d2c] text-[#e0e0e0] focus:ring focus:ring-[#3d3d3d] placeholder:text-[#9e9e9e] focus:outline-none shadow-sm"
					/>
					<input
						type="password"
						placeholder="الباسورد"
						className="w-full rounded-lg p-3 text-end bg-[#2c2d2c] text-[#e0e0e0] focus:ring focus:ring-[#3d3d3d] placeholder:text-[#9e9e9e] focus:outline-none shadow-sm"
					/>
					<button
						type="submit"
						className="w-full rounded-lg bg-[#4caf50] text-white p-3 font-medium hover:bg-[#45a043] transition"
					>
						تسجيل الدخول
					</button>
					<p className="text-sm text-[#9e9e9e]">
						<span>لديك حساب بالفعل؟</span>
						<a className="text-[#4caf50] hover:underline p-2 text-lg font-bold">
							حياك
						</a>
					</p>
				</form>
			</dialog>
		</>
	);
}
