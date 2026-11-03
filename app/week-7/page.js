"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white text-center px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold text-pink-400">Week 7</h1>

      <NewItem onAddItem={handleAddItem} />

      <br />

      <ItemList items={items} />

      <br />

      <Link href="/" className="text-purple-400 underline hover:text-purple-300">
      Back to home 
      </Link>
    </main>
  );
}