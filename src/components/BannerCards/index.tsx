import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BannerCards = () => {
	return (
		<section className="flex flex-wrap items-center justify-center gap-4 my-[40px] w-full  lg:px-[100px] md:px-[40px] px-[20px]">
			<div className="sales relative">
				<Image
					src={require("../../Assets/bannerCard/sale.png")}
					alt="sale img"
				/>
				<div className="absolute top-[32px] flex items-center w-full flex-col text-white">
					<div className="subtext text-[12px] uppercase mb-[16px]">
						Best Deals
					</div>
					<div className="mainHeader text-[32px] capitalize font-bold">
						Sale of the Month
					</div>
					<div className="time flex items-top justify-center gap-6 text-[16px] ">
						<p className="cardTime">
							00 <span>DAYS</span>
						</p>
						<p>:</p>
						<p className="cardTime">
							02 <span>HOURS</span>
						</p>
						<p>:</p>
						<p className="cardTime">
							02 <span>MINS</span>
						</p>
						<p>:</p>
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
			<div className="lowFat relative">
				<Image
					src={require("../../Assets/bannerCard/lowfat.png")}
					alt="sale img"
				/>
			</div>
			<div className="freshFruit relative">
				<Image
					src={require("../../Assets/bannerCard/freshFruit.png")}
					alt="sale img"
				/>
			</div>
		</section>
	);
};

export default BannerCards;