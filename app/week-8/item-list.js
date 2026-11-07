"use client";
import Item from "./item";
import {useState} from "react";
import MealIdeas from "./meal-ideas";

export default function ItemList({items, onItemSelect}) {

    const [sortBy, setSortBy] = useState("name");
                    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);                         
        }
        else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });
         
    return(
        <div>
            <div className="mb-4">
                <button onClick={() => setSortBy("name")} className={`px-3 py-1 mr-2 rounded text-white ${sortBy === "name" ? "bg-blue-800" : "bg-gray-500"}`}>name</button>
                <button onClick={() => setSortBy("category")} className={`px-3 py-1 mr-2 rounded text-white ${sortBy === "category" ? "bg-blue-800" : "bg-gray-500"}`}>category</button>                                                     
            </div>
            <ul>
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
        </div>
    )
}