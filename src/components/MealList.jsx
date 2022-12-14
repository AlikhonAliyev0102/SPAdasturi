import React from 'react';
import {MealIteam} from './MealIteam';

const MealList = ({meals}) => {
    return (
        <div className='List'>
            {meals.map(meal => (
                <MealIteam key={meal.idMeal} {...meal}/>
            ))}
            
        </div>
    );
};


export {MealList};