"use client"
import { useState } from 'react';
import { useEffect } from 'react';

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);
    
    async function loadMealIdeas() {
        const mealList = await fetchMealIdeas(ingredient);
        setMeals(mealList);    
    } 

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
        }, [ingredient]);
        
        return (
            <div>
                <h2>Meals: </h2>
                <ul>
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            {meal.strMeal}
                        </li>
                    ))}
                </ul>
            </div>
        );
}

async function fetchMealIdeas(ingredient) {
    const mealdb = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await mealdb.json();
    return data.meals || [];
}

