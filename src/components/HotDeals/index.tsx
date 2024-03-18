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
							<button className="px-[24px] py-[10px] bg-[var(--Primary)] text-white flex-1 rounded-full mx-[10px] text-[18px]">
								Click me
							</button>
							<Link
								href="/"
								className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
								<IoEyeOutline size={18} />
							</Link>
						</div>
						{/* title + price */}
						<div className="px-[10px] text-center mt-[16px] py-[16px]">
							<h3 className="lg:text-[26px] md:text-[24px] text-[18px] ">
								Chinese cabbage
							</h3>
							<p className="font-semibold text-[18px] md:mt-[16px] mt-[8px]">
								$12.00 <s className="text-[var(--priceGrey)]">$24.00</s>
							</p>
						</div>
						{/* RATING */}
						<div className="rating flex flex-wrap items-center justify-center gap-3 text-[12px] text-[var(--priceGrey)] md:mt-[8px]">
							<Image
								src={require("../../Assets/stars.png")}
								alt="rating"
							/>
							<p> (524 Feedback)</p>
						</div>
						{/* OFFER TIME */}
						<div className="my-[16px]">
							<p className="text-center md:text-[16px] sm:text-[14px] text-[12px] text-[var(--priceGrey)] mb-[5px]">
								Hurry up! Offer ends In:
							</p>
							<div className="Timecontainer flex items-start justify-center md:text-[20px] text-[16px] font-medium gap-4 text-center">
								<div className="day">
									<h4>02</h4>
									<p className="text-[12px] text-[var(--priceGrey)]">DAYS</p>
								</div>
								<span className="text-[var(--priceGrey)]">:</span>
								<div className="hrs">
									<h4>23</h4>
									<p className="text-[12px] text-[var(--priceGrey)]">HOURS</p>
								</div>
								<span className="text-[var(--priceGrey)]">:</span>
								<div className="mins">
									<h4>34</h4>
									<p className="text-[12px] text-[var(--priceGrey)]">MINS</p>
								</div>
								<span className="text-[var(--priceGrey)]">:</span>
								<div className="secs">
									<h4>57</h4>
									<p className="text-[12px] text-[var(--priceGrey)]">SECS</p>
								</div>
							</div>
						</div>
					</div>
					<ProductList />
					<ProductList />
				</div>
			</div>
		</section>
	);
};

export default HotDeals;
