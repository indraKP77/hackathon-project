import React from 'react'
import Meal from './Meal.js'

const MealList = ({ mealData }) => {
    const nutrients = mealData.nutrients;
  return (
    <main>
        <section className='nutrients'>
            <h1>Macros</h1>
            <ul>
                <li>Calories: {nutrients.calories}</li>
                <li>Carbohydrates: {nutrients.carbohydrates}</li>
                <li>Fats: {nutrients.fat}</li>
                <li>Protien: {nutrients.protein}</li>
            </ul>
        </section>

        <section className='meals'>
            {mealData.meals.map((meal)=>{
                return <Meal key={meal.id} meal={meal} />;
            })}
        </section>
    </main>
  )
}

export default MealList
