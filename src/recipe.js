import React from 'react';
import './App.css';
const Recipe = ({ title, image, ingredients }) => {
    return (
        <div >
            <div className="recipe-box">
                <h3 className="labels">{title}</h3>

                <img src={image} alt="" className="dish-img" />

                <ol className="ingredient-list">
                    {ingredients.map(ingredients => (
                        <li key={title + ingredients.text}>{ingredients.text}</li>
                    ))
                    }
                </ol>
            </div>
            <hr color="white" />
        </div>
    );
}


export default Recipe;