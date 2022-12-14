import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { Loader } from '../components/Loader';

const Retcipe = () => {
    const [recipe, setRecipe] = useState([])
    const [showRecipe, setShowRecipe] = useState(false)
    const {id} = useParams()
    const {goBack} = useHistory()

    const handleRecipeShow = () =>{
        setShowRecipe(!showRecipe)
    }

    useEffect(()=>{
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [])

    return (
        <div>
            {!recipe.idMeal ? <Loader/> : 
            <div className='recipe'>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h1>{recipe.strMeal}</h1>
                <h6><b>Category: </b>{recipe.strCategory}</h6>
                {recipe.strArea ? <h5> <b>Area: </b> {recipe.strArea}</h5> : null}
                <p>{recipe.strInstructions}</p>
                <button onClick={handleRecipeShow} className='btn'>Show Recipe</button>
                {showRecipe ? (
                    <table className="centred">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map(key => {
                                if(key.includes('Ingredient') && recipe[key]){
                                    return(
                                        <tr>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                ):null}
                
                {recipe.strYoutube ? (
                    <div className="row">
                        <h5>Video Recipe</h5>
                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen title={id}></iframe>
                    </div>
                ): null}
            </div>
            }
            <button className='btn' onClick={goBack}>Go back</button>
        </div>
    );
};


export default Retcipe;