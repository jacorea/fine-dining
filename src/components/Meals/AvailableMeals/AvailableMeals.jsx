import React from 'react'
import MEALS_DATA from '../../../utils/meals-data'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
    const mealsList = MEALS_DATA.map((meal)=> <li>{meal.name}</li>)

    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    )
}

export default AvailableMeals
