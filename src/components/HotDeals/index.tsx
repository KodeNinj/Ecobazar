import React from "react";
import Header from "../Headers";
import ProductList from "../ProductsList";

const HotDeals = () => {
	return (
		<section className="lg:px-[100px] md:px-[40px] px-[20px] ">
			<Header
				title="Hot Deals"
				view_all="View all"
			/>
			<div className="w-full my-[32px]">
				<div className="container  grid  justify-center ">
					<div className="mainDeal row-span-2 col-span-2 bg-red-200 ">
						Main deal
					</div>
					<ProductList />
					<ProductList />
				</div>
			</div>
		</section>
	);
};

export default HotDeals;
