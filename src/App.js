import React,{useState} from "react";
import MealList from "./MealList";


function App() {
  const [mealData,setMealData] = useState(null);
  const [calories,setCalories] = useState(2000);
  const [dietPreference,setDietPreference] = useState('');
  function handleChange(e){
    setCalories(e.target.value)
  }
  function getMealData(){
    fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=c69183c8ad0d44309ebb87b24096e2f2&timeFrame=day&diet=${dietPreference}&targetCalories=${calories}`)
    .then((response)=>response.json())
    .then((data)=>{
      setMealData(data);
    })
    .catch(()=>{
      console.log("error");
      
    })
  }
  return <div class="container">
    <div className="App">
    <div className="p1">
    <section className="diets">
      <label for="diet-preferences">Diet Preferences:</label>
      <div className="diet">
        <div className="p2">
      <input type="radio" id="vegetarian" name="diet-preferences" value="vegetarian" checked={dietPreference === "vegetarian"} onChange={(e)=>setDietPreference(e.target.value)} required />
        <label for="vegetarian">Vegetarian</label>
        </div>
        <div className="p2">
        <input type="radio" id="primal" name="diet-preferences" value="primal" checked={dietPreference === "primal"} onChange={(e)=>setDietPreference(e.target.value)} required />
        <label for="non-vegetarian">Non-Vegetarian</label>
        </div>
        <div className="p2">
        <input type="radio" id="vegan" name="diet-preferences" value="vegan" checked={dietPreference === "vegan"} onChange={(e)=>setDietPreference(e.target.value)} required />
        <label for="vegan">Vegan</label>
        </div>
        </div>
    </section>
    <section className="controls">
      <input type="number" placeholder="Calories (e.g. 2000)" onChange={handleChange} />
    </section>
    </div>
    <button onClick={getMealData}>Get Daily Meal Plan</button>
    {mealData && <MealList mealData={mealData} />}
    </div>
  </div>;
}

export default App;