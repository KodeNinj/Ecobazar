import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerCards = () => {
	return (
		<section className="flex flex-wrap items-center justify-center gap-4 lg:my-[80px] my-[40px] w-full  lg:px-[100px] md:px-[40px] px-[20px]">
			<div className="sales relative">
				<Image
					src={require("../../Assets/bannerCard/sale.png")}
					alt="sale img"
				/>
				<div className="absolute top-[32px] flex items-center w-full flex-col text-white">
					<div className="subtext text-[12px] uppercase mb-[16px] font-medium">
						Best Deals
					</div>
					<div className="mainHeader lg:text-[32px] md:text-[24px] text-[20px] capitalize font-semibold">
						Sale of the Month
					</div>
					<div className="time flex items-top justify-center gap-6 mt-[14px ">
						<p className="cardTime">
							00 <span>DAYS</span>
						</p>
						<p className="mt-[4px]">:</p>
						<p className="cardTime">
							02 <span>HOURS</span>
						</p>
						<p className="mt-[4px]">:</p>
						<p className="cardTime">
							02 <span>MINS</span>
						</p>
						<p className="mt-[4px]">:</p>
						<p className="cardTime">
							02 <span>SECS</span>
						</p>
					</div>
					{/* end of time */}
					<button className="flex items-center justify-center gap-[16px] px-[32px] py-[10px] bg-white text-[var(--Primary)] rounded-full my-[32px]">
						Shop Now <FaArrowRightLong />
					</button>
				</div>
			</div>
			{/* end of first card */}
			<div className="lowFat relative">
				<Image
					src={require("../../Assets/bannerCard/lowfat.png")}
					alt="sale img"
				/>
				<div className="absolute top-[32px] flex items-center w-full flex-col text-white">
					<div className="subtext text-[12px] uppercase mb-[16px] font-medium">
						85% Fat Free
					</div>
					<div className="mainHeader lg:text-[32px] md:text-[24px] text-[20px] capitalize font-semibold">
						Low-Fat Meat
					</div>
					<p>
						Started at{" "}
						<span className="font-bold text-[var(--warning)]">$79.99</span>
					</p>
					<button className="flex items-center justify-center gap-[16px] px-[32px] py-[10px] bg-white text-[var(--Primary)] rounded-full my-[32px]">
						Shop Now <FaArrowRightLong />
					</button>
				</div>
			</div>
			<div className="freshFruit relative">
				<Image
					src={require("../../Assets/bannerCard/freshFruit.png")}
					alt="sale img"
				/>
				<div className="absolute top-[32px] flex items-center w-full flex-col text-black">
					<div className="subtext text-[12px] uppercase mb-[16px] font-medium">
						Summer Sale
					</div>
					<div className="mainHeader lg:text-[32px] md:text-[24px] text-[20px] capitalize font-semibold">
						100% Fresh Fruit
					</div>
					<p className="mt-[16px]">
						Up to{" "}
						<span className="px-[10px] py-[10px] bg-black font-bold text-[var(--yellow)] rounded-md mx-[10px]">
							64% OFF
						</span>
					</p>
					<button className="flex items-center justify-center gap-[16px] px-[32px] py-[10px] bg-white text-[var(--Primary)] rounded-full my-[32px]">
						Shop Now <FaArrowRightLong />
					</button>
				</div>
			</div>
		</section>
	);
};

export default BannerCards;
