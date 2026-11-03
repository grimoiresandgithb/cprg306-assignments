"use client"

import { useState } from "react";

export default function NewItem({ onAddItem }) {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    // increase quantity by 1, to a max of 20
    const increment = () => {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
    };

    // decrease quantity by 1, down to a min of 1
    const decrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: Math.random().toString(36).substring(2, 9),
            name: name,
            quantity: quantity,
            category: category,
        };

        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <div className="mx-auto w-full max-w-md">
            <form 
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg"
            >
            <input 
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Item name"
                required
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white placeholder:text-slate-400 focus:border-pink-400 focus:outline-none"
            />
            <button 
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className="rounded-lg bg-purple-600 py-2 px-4 text-xl font-bold text-white hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
            -    
            </button> 

            <span className="text-xl font-semibold text-pink-300">
                {quantity}
            </span>

            <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className="rounded-lg bg-pink-600 px-4 py-2 text-xl font-bold text-white hover:bg-pink-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
                +
            </button>   

            <select 
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            >
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>

            <button 
                type="submit"
                className="rounded bg-green-600 px-4 py-2 font-bold hover:bg-green-600"
            >
                Add Item
            </button>
            </form>
        </div>
    );
}