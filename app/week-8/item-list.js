"use client";

import Item from "./item";
import { useState } from "react";



export default function ItemList({ items, onItemSelect }) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return 0;
  });

  const groupedItems = [...items]
    .sort((a, b) => {
      const categoryCompare = a.category.localeCompare(b.category);

      if (categoryCompare !== 0) {
        return categoryCompare;
      }

      return a.name.localeCompare(b.name);
    })
    .reduce((groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }

      groups[item.category].push(item);

      return groups;
    }, {});


return (
  <div className="max-w-md mx-auto">
    <div className="mb-6 flex flex-wrap justify-center gap-2">
      <button
        onClick={() => setSortBy("name")}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          sortBy === "name"
            ? "bg-pink-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Sort by Name
      </button>

      <button
        onClick={() => setSortBy("category")}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          sortBy === "category"
            ? "bg-purple-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Sort by Category
      </button>

      <button 
        onClick={() => setSortBy("group")}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
          sortBy === "group"
            ? "bg-purple-600 text-white"
            : "bg-slate-800 text-slate-300 hover:bg-slate-700"
        }`}
      >
        Group by Category
      </button>
    </div>

    {sortBy === "group" ? (
      <div>
        {Object.keys(groupedItems).map((category) => (
          <div key={category} className="mb-6">
            <h2 className="mb-3 mt-6 text-left text-xl font-bold capitalize text-pink-400">
              {category}
            </h2>

            <ul className="space-y-2">
              {groupedItems[category].map((item) => (
                <Item 
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={() => onItemSelect(item)}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    ): (
      <ul className="space-y-2">
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    )}
  </div>
);
}
