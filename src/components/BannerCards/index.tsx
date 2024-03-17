import Image from "next/image";
import React from "react";

const BannerCards = () => {
	return (
		<section className="flex flex-wrap items-center justify-center gap-4 my-[40px] w-full bg-red-100 lg:px-[100px] md:px-[40px] px-[20px]">
			<div className="sales relative">
				<Image
					src={require("../../Assets/bannerCard/sale.png")}
					alt="sale img"
				/>
				<div className="absolute top-[32px] flex items-center w-full flex-col text-white">
					<div className="subtext text-[12px] uppercase mb-[16px]">
						Best Deals
					</div>
					<div className="mainHeader text-[18px] capitalize font-bold">
						Sale of the Month
					</div>
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
