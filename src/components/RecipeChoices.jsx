import { useState } from "react";

const RecipeChoices = ({ handleChange, label, currentVal, choices}) => {
    return (
      <div>
            <input
            type="text"
            name={label}
            value={currentVal}
            placeholder="Guess the ingredient..."
            onChange={handleChange}
            className="textbox"
            />
            {choices && choices.length > 0 && (
            <div className="choices-list">
                {choices.map((choice) => (
                    <div key={choice} className="choice-item">
                    {choice}
                    </div>
                ))}
            </div>
            )}
      </div>
    );
};

export default RecipeChoices;