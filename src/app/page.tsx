import Hero from "@/components/Hero";
import ValuesPanel from "@/components/ValuesPanel";
import React from "react";
import Data from "@/Data";
const page = () => {
	return (
		<div className="w-full min-h-[100vh]">
			<Hero />
			<ValuesPanel />
		</div>
	);
};

export default page;
