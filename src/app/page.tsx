import Hero from "@/components/Hero";
import ValuesPanel from "@/components/ValuesPanel";
import React from "react";
import Data from "@/Data/popularProducts";
import Popular from "@/components/PopularCategories";
const page = () => {
	return (
		<div className="w-full min-h-[100vh]">
			<Hero />
			<ValuesPanel />
			<Popular/>
		</div>
	);
};

export default page;
