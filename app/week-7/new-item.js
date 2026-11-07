"use client"
import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");


    function handleSubmit(e) {
        e.preventDefault();
        const item = {id: Math.random().toString(36).substring(2, 9), name, quantity, category};
        onAddItem(item);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    function handleNewName(e) {
        setName(e.target.value);
    }
    function handleNewCategory(e) {
        setCategory(e.target.value);
    }

    function increment() {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }

    function decrement() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto mt-8 p-6 rounded-lg bg-slate-600 text-white space-y-4"
        >
            <div>
                <label htmlFor="name" className="block mb-1 text-white">Item Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleNewName}
                    required    
                    className="w-full rounded p-2 text-black"
                />
            </div>

            <div>
                <label htmlFor="category" className="block mb-1 text-white">Category</label>
                <select 
                    id="category"
                    value={category}
                    onChange={handleNewCategory}
                    className="w-full rounded p-2 text-gray-800"
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
            </div>

            <div>
                <p>Quantity: {quantity}</p>
                <button type="button" onClick={increment} className="rounded bg-green-700 hover:bg-green-900 p-2 m-2">Increment</button>
                <button type="button" onClick={decrement} className="rounded bg-blue-700 hover:bg-blue-900 p-2 m-2">Decrement</button>
            </div>
            <button type="submit" className="rounded bg-red-700 hover:bg-red-900 p-2 m-2">Add Item</button>
        </form>
    )
}