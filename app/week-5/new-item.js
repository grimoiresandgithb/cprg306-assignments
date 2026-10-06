"use client"

import { useState } from "react";

export default function NewItem() {

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
            name: name,
            quantity: quantity,
            category: category,
        };

        console.log(item);

        alert(
            `Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
        );

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <div className="flex w-fit mx-auto items-center gap-4 rounded-lg bg-pink-800 p-6 text-shadow-amber-100">
            <form 
                onSubmit={handleSubmit}
                className="mx-auto flex w-fit flex-col gap-4 rounded-lg bg-gray-800 p-6 text-white"
            >
            <input 
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Item name"
                required
                className="rounded border border-gray-400 px-4 py-2 text-black"
            />
            <button 
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className="rounded bg-gray-600 px-4 py-2 text-xl font-bold hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
            -    
            </button> 

            <span className="w-8 text-center text-xl font-semibold">
                {quantity}
            </span>

            <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className="rounded bg-gray-600 px-4 py-2 text-xl font-bold hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                +
            </button>   

            <select 
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded border border-gray-400 px-4 py-2 text-black"
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