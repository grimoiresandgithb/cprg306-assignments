"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );

    const data = await response.json();

    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [selectedMeal, setSelectedMeal] = useState(null);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    async function loadMealDetails(idMeal) {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );

    const data = await response.json();
    const meal = data.meals?.[0];

    if (!meal) {
        return;
    }

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        if (ingredient && ingredient.trim()) {
        ingredients.push({
            ingredient: ingredient.trim(),
            measure: measure?.trim() || "",
        });
        }
    }

    setSelectedMeal({
        idMeal: meal.idMeal,
        ingredients: ingredients,
    });
    }

    useEffect(() => {
        setSelectedMeal(null);
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
  <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
    <h2 className="mb-2 text-2xl font-bold text-purple-300">
      Meal Ideas
    </h2>

    {ingredient ? (
      <p className="mb-6 text-sm text-slate-400">
        Ideas using{" "}
        <span className="font-semibold capitalize text-pink-300">
          {ingredient}
        </span>
      </p>
    ) : (
      <p className="mb-6 text-sm text-slate-400">
        Select an item from your shopping list to see meal ideas.
      </p>
    )}

        {meals.length > 0 ? (
<ul className="space-y-3 text-left">
  {meals.map((meal) => (
    <li
      key={meal.idMeal}
      className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3"
    >
      <button
        type="button"
        onClick={() => loadMealDetails(meal.idMeal)}
        className="w-full text-left font-semibold text-slate-100 hover:text-pink-300"
      >
        {meal.strMeal}
      </button>

      {selectedMeal?.idMeal === meal.idMeal && (
        <div className="mt-3 border-t border-slate-700 pt-3">
          <h3 className="mb-2 text-sm font-semibold text-purple-300">
            Ingredients
          </h3>

          <ul className="space-y-1 text-sm text-slate-300">
            {selectedMeal.ingredients.map((item, index) => (
              <li key={index}>
                {item.measure} {item.ingredient}
              </li>
            ))}
          </ul>
        </div>
        )}
        </li>
    ))}
            </ul>
        ) : ingredient ? (
        <p className="text-sm text-slate-500">
            No meal ideas found for this ingredient.
        </p>
        ) : null}
    </div>
    );
}