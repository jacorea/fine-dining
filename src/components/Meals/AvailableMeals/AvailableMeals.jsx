import React from 'react'
import MEALS_DATA from '../../../utils/meals-data'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'
import classes from './AvailableMeals.module.css'

const AvailableMeals = () => {
    const mealsList = MEALS_DATA.map((meal)=> <MealItem 
        key={meal.id} 
        id={meal.id} 
        description={meal.description} 
        price={meal.price} 
        name={meal.name} 
        />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
