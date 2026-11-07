"use client";

import Item from "./item";
import { useState } from "react";
import items from "./items.json";


export default function ItemList() {

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
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => setSortBy("name")}
        className={`px-4 py-2 rounded font-medium ${
          sortBy === "name"
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Sort by Name
      </button>

      <button
        onClick={() => setSortBy("category")}
        className={`px-4 py-2 rounded font-medium ${
          sortBy === "category"
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Sort by Category
      </button>

      <button 
        onClick={() => setSortBy("group")}
        className={`px-4 py-2 rounded font-medium ${
          sortBy === "group"
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        Group by Category
      </button>
    </div>

    {sortBy === "group" ? (
      <div>
        {Object.keys(groupedItems).map((category) => (
          <div key={category} className="mb-6">
            <h2 className="mb-2 text-xl font-bold capitalize">
              {category}
            </h2>

            <ul className="divide-y divide-gray-200 rounded-lg shadow">
              {groupedItems[category].map((item) => (
                <Item 
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    ): (
      <ul className="divide-y divide-gray-200 rounded-lg shadow">
        {sortedItems.map((item) => (
          <Item 
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    )}
  </div>
);
}
