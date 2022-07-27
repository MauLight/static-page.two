import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Data from "./data";

import Card from "./Card"
import Footer from "./Footer";

const cards = Data.map(item => {
	return <Card
		key={item.id}
		item={item}

	/>
})

export default function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<section className="cards-list">
				{cards}
			</section>
			<Footer />
		</div>
	)
}