"use client";
import React, { useEffect, useState } from "react";
import Header from "../Headers";
import PRODUCTS_LIST from "../../Data/PopularProducts";
import Image from "next/image";
import Rating from "@/Assets/Rating.png";
import { PiHandbagLight } from "react-icons/pi";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";

const PopularProducts = () => {
	const [handleviewState, sethandleviewState] = useState(false);

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
							className="group px-[16px] py-[24px] border-[1px] border-collapse relative hover:border-[var(--Soft-Primary)] ease transition-all hover:shadow-md"
							key={ITEM.id}>
							<Image
								src={ITEM.img}
								alt={ITEM.name}
								width={200}
							/>
							{/* handles the toggling of the hidden buttons on each cards */}
							{ITEM.viewClicked ? (
								<div className="absolute top-3 right-6 flex flex-col gap-[16px] ">
									<Link
										href="/"
										className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
										<FaRegHeart size={18} />
									</Link>
									<Link
										href="/"
										className="p-[10px] bg-white rounded-full border-[2px] border-[var(--iconBg)] shadow-sm flex items-center justify-center">
										<IoEyeOutline size={18} />
									</Link>
								</div>
							) : (
								""
							)}
							<div className="deets flex items-center justify-between">
								<div className="left">
									<h2 className="group-hover:text-[var(--Primary)] name text-[14px] text-[var(--shopgrey)]">
										{ITEM.name}
									</h2>
									<p className="price">
										${ITEM.new_price} <span>{ITEM.old_price}</span>
									</p>
									<Image
										src={Rating}
										alt="ratingss"
									/>
								</div>

								<div className="right">
									<p
										className="bg-[var(--iconBg)] active:bg-[var(--Primary)] hover:bg-[var(--Primary)] hover:text-white rounded-full p-[10px] border-2"
										onClick={(e) => {
											ITEM.viewClicked = !ITEM.viewClicked;
											sethandleviewState(!handleviewState);
										}}>
										<PiHandbagLight
											size={18}
											className="icon "
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
