"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    // increase quantity by 1, to a max of 20
    const increment = () => {
        setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
    };

    // decrease quantity by 1, down to a min of 1
    const decrement = () => {
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
    }

    return (
        <div className="flex w-fit mx-auto items-center gap-4 rounded-lg bg-pink-800 p-6 text-shadow-amber-100">
            <button 
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
                onClick={increment}
                disabled={quantity === 20}
                className="rounded bg-gray-600 px-4 py-2 text-xl font-bold hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
            >
                +
            </button>   
        </div>
    );
}