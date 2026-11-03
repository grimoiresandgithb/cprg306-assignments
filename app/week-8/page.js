"use client";

import { useState } from "react";
import Link from "next/link";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name 
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "");

      setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-center text-white">
      <h1 className="mb-8 text-3xl font-bold text-pink-400">
        Week 8
      </h1>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />

          <div className="mt-8">
            <ItemList
              items={items}
              onItemSelect={handleItemSelect}
            />
          </div>
        </div>

        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="text-purple-400 underline hover:text-purple-300"
        >
          Back to home 
        </Link>
      </div>
    </main>
  );
}