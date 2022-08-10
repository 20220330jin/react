import { useCallback, useEffect, useState } from 'react'

import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);

    const fetchMealsHandler = useCallback(async () => {
        try {
            const response = await fetch('https://react-http-a3c85-default-rtdb.firebaseio.com/meals.json')
            const data = await response.json();
            console.log(data);

            const loadedMeals = [];
            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            setMeals(loadedMeals);
            console.log(meals);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchMealsHandler();
    }, [fetchMealsHandler])


    const mealsList = meals.map((meal) => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                    <li>1</li>
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;