import React from "react";
import Header from "../Headers";
import ProductList from "../ProductsList";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Link from "next/link";

const HotDeals = () => {
	return (
		<section className="lg:px-[100px] md:px-[40px] px-[20px] ">
			<Header
				title="Hot Deals"
				view_all="View all"
			/>
			<div className="w-full h-auto py-[24px] my-[32px]">
				<div className="container  grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  justify-center border-[2px] border-slate-100 ">
					<div className="mainDeal mb-[10px] row-span-2 col-span-2 ">
						<Image
							src={require("../../Assets/focusImg.png")}
							alt="Apple img"
							className="flex justify-center w-[70%] mx-[15%]"
						/>
						<div className="CTAbtns flex justify-around items-center md:px-[40px] px-[10px]">
							<Link
								href="/"
								className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
								<FaRegHeart size={18} />
							</Link>
							<button className="px-[24px] py-[10px] bg-[var(--Primary)] text-white flex-1 rounded-full mx-[40px]">
								click me
							</button>
							<Link
								href="/"
								className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
								<IoEyeOutline size={18} />
							</Link>
						</div>
						<p className="px-[10px] text-center mt-[16px] py-[16px]">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Consequuntur asperiores accusantium ipsam error quis quos quo
							autem dignissimos obcaecati numquam quaerat saepe fugit
							aspernatur, velit, commodi ullam hic ipsa iure.
						</p>
					</div>
					<ProductList />
					<ProductList />
				</div>
			</div>
		</section>
	);
};

export default HotDeals;
