import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json";

const BaristaForm = () => {

  const [inputs, setInputs] = useState({
    temperature: "",
    milk: "",
    syrup: "",
    blended: ""
  });

  const ingredients = {
    temperature: ["hot", "lukewarm", "cold"],
    syrup: ["mocha", "vanilla", "toffee", "maple", "caramel", "other", "none"],
    milk: ["cow", "oat", "goat", "almond", "none"],
    blended: ["yes", "turbo", "no"]
  };

  const [currentDrink, setCurrentDrink] = useState("");
  const [trueRecipe, setTrueRecipe] = useState({});
  const [correct_temp, setCheckedTemperature] = useState("");
  const [correct_syrup, setCheckedSyrup] = useState("");
  const [correct_milk, setCheckedMilk] = useState("");
  const [correct_blended, setCheckedBlended] = useState("");

  const onNewDrink = () => {

    setInputs({
      temperature: "",
      milk: "",
      syrup: "",
      blended: ""
    });

    setCheckedTemperature("");
    setCheckedSyrup("");
    setCheckedMilk("");
    setCheckedBlended("");

    getNextDrink();
  };

  const getNextDrink = () => {
    const randomDrinkIndex = Math.floor(
      Math.random() * drinksJson.drinks.length
    );

    setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
    setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
  };

  const onCheckAnswer = () => {

    if (!ingredients.temperature.includes(inputs.temperature.toLowerCase())) {
      alert("Invalid temperature choice!");
      return;
    }

    if (!ingredients.milk.includes(inputs.milk.toLowerCase())) {
      alert("Invalid milk choice!");
      return;
    }

    if (!ingredients.syrup.includes(inputs.syrup.toLowerCase())) {
      alert("Invalid syrup choice!");
      return;
    }

    if (!ingredients.blended.includes(inputs.blended.toLowerCase())) {
      alert("Invalid blended choice!");
      return;
    }

    setCheckedTemperature(
      trueRecipe.temp === inputs.temperature ? "correct" : "wrong"
    );

    setCheckedSyrup(
      trueRecipe.syrup === inputs.syrup ? "correct" : "wrong"
    );

    setCheckedMilk(
      trueRecipe.milk === inputs.milk ? "correct" : "wrong"
    );

    setCheckedBlended(
      trueRecipe.blended === inputs.blended ? "correct" : "wrong"
    );
  };

  return (
    <div>
      <h2>Hi, I'd like to order a:</h2>

      <div className="drink-container">
        <h2 className="mini-header">{currentDrink}</h2>

        <button
          className="button newdrink"
          onClick={onNewDrink}
        >
          GENERATE!
        </button>
      </div>

      <form className="container">

        <div className="mini-container">
          <h3>Temperature</h3>

          <div className="answer-space" id={correct_temp}>
            {inputs.temperature}
          </div>

          <RecipeChoices
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
            label="temperature"
            choices={ingredients.temperature}
            currentVal={inputs.temperature}
          />
        </div>

        <div className="mini-container">
          <h3>Milk</h3>

          <div className="answer-space" id={correct_milk}>
            {inputs.milk}
          </div>

          <RecipeChoices
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
            label="milk"
            choices={ingredients.milk}
            currentVal={inputs.milk}
          />
        </div>

        <div className="mini-container">
          <h3>Syrup</h3>

          <div className="answer-space" id={correct_syrup}>
            {inputs.syrup}
          </div>

          <RecipeChoices
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
            label="syrup"
            choices={ingredients.syrup}
            currentVal={inputs.syrup}
          />
        </div>

        <div className="mini-container">
          <h3>Blended</h3>

          <div className="answer-space" id={correct_blended}>
            {inputs.blended}
          </div>

          <RecipeChoices
            handleChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                [e.target.name]: e.target.value
              }))
            }
            label="blended"
            choices={ingredients.blended}
            currentVal={inputs.blended}
          />
        </div>

      </form>

      <button className="button submit" onClick={onCheckAnswer}>
        Check Answer
      </button>

      <button className="button newdrink" onClick={onNewDrink}>
        New Drink
      </button>

    </div>
  );
};

export default BaristaForm;