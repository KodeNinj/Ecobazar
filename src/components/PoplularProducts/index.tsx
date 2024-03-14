"use client";
import React, { useState } from "react";
import Header from "../Headers";
import PRODUCTS_LIST from "../../Data/PopularProducts";
import Image from "next/image";
import Rating from "@/Assets/Rating.png";
import { PiHandbagLight } from "react-icons/pi";
const PopularProducts = () => {
	const [bagClicked, setbagClicked]: boolean = useState(false);
	const [hiddenContent, sethiddenContent]: boolean = useState(bagClicked);
	return (
		<div className="lg:px-[100px] md:px-[40px] px-[20px] mt-[60px]">
			<Header
				title="Popular Products"
				view_all="View all"
			/>
			<div className="productList flex flex-wrap items-center justify-center my-[32px]">
				{PRODUCTS_LIST.map((ITEM): JSX.Element => {
					return (
						<div
							className="px-[16px] py-[24px] border-[1px] border-collapse relative"
							key={ITEM.id}>
							<Image
								src={ITEM.img}
								alt={ITEM.name}
								width={200}
							/>
							<div className="deets flex items-center justify-between">
								<div className="left">
									<h2 className="name text-[14px] text-[var(--shopgrey)]">
										{ITEM.name}
									</h2>
									<p className="price">
										${ITEM.new_price} <span>{ITEM.old_price}</span>
									</p>
									<Image
										src={Rating}
										alt="ratings"
									/>
								</div>
								<div
									className="absolute top-4 right-4"
									id="false">
									hhhhhh
								</div>
								<div className="right">
									<p
										className="bg-[var(--iconBg)] active:bg-[var(--Primary)] hover:bg-[var(--Primary)] rounded-full p-[10px] border-2"
										onClick={() => {
											setbagClicked(!bagClicked);
											console.log(bagClicked, ITEM);
										}}>
										<PiHandbagLight
											size={24}
											className="icon hover:text-white"
										/>
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default PopularProducts;
