import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const meals = [];

const AvailableMeals = () => {



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