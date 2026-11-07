"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
    }

    function handleItemSelect(item) {
        const cleanName = item.name
            .split(",")[0]
            .replace(/\p{Extended_Pictographic}/gu, "")
            .trim();
        console.log(cleanName); 
        setSelectedItemName(cleanName);    
    }

    return(
        <main className="mx-auto min-h-screen bg-rose-950 bg-blend-saturation p-4 border-2 rounded-3xl">
            <div className="flex gap-8">
                <h1 className="text-center m-6 font-serif text-2xl text-amber-500">Shopping List</h1>
                <ItemList items={items} onItemSelect={handleItemSelect}/>
                <NewItem onAddItem={handleAddItem}/>
                <MealIdeas ingredient={selectedItemName}></MealIdeas>
            </div>
        </main>
    )
}