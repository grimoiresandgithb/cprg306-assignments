"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems([...items, newItem]);
    }
    return(
        <main className="mx-auto min-h-screen bg-rose-950 bg-blend-saturation p-4 border-2 rounded-3xl">
            <h1 className="text-center m-6 font-serif text-2xl text-amber-500">Shopping List</h1>
            <ItemList items={items}/>
            <NewItem onAddItem={handleAddItem}/>
        </main>
    )
}