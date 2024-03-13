import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiHeadsetLight, PiPackageLight } from "react-icons/pi";
import { BsBagCheck } from "react-icons/bs";

const ValuesPanel = () => {
	return (
		<section className="flex justify-around gap-[32px] items-center px-[100px] py-[40px]">
			<div className="box flex items-center gap-[16px] ">
				<div className="icon">
					<TbTruckDelivery
						size={36}
						className="text-[var(--Soft-Primary)]"
					/>
				</div>
				<div className="texts">
					<h3 className="font-bold">Free Shipping</h3>
					<p className="text-[14px] text-[var(--lighttext)]">
						Free shipping on all your order
					</p>
				</div>
			</div>
			<div className="box flex items-center gap-[16px] ">
				<div className="icon">
					<PiHeadsetLight
						size={36}
						className="text-[var(--Soft-Primary)]"
					/>
				</div>
				<div className="texts">
					<h3 className="font-bold">Customer Support</h3>
					<p className="text-[14px] text-[var(--lighttext)]">
						Instant access to Support
					</p>
				</div>
			</div>
			<div className="box flex items-center gap-[16px] ">
				<div className="icon">
					<BsBagCheck
						size={36}
						className="text-[var(--Soft-Primary)]"
					/>
				</div>
				<div className="texts">
					<h3 className="font-bold">100% Secure Payment</h3>
					<p className="text-[14px] text-[var(--lighttext)]">
						We ensure your money is save
					</p>
				</div>
			</div>
			<div className="box flex items-center gap-[16px] ">
				<div className="icon">
					<PiPackageLight
						size={36}
						className="text-[var(--Soft-Primary)]"
					/>
				</div>
				<div className="texts">
					<h3 className="font-bold">Money-Back Guarantee</h3>
					<p className="text-[14px] text-[var(--lighttext)]">
						30 Days Money-Back Guarantee
					</p>
				</div>
			</div>
		</section>
	);
};

export default ValuesPanel;
