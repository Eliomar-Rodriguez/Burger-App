import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        })//el array tiene elementos pero vacios [[],[],[]]
        .reduce((arr,el)=>{//con e reduce elimina los elementos que no tienen nada dentro[]
            return arr.concat(el)
        }, [])
        if(transformedIngredients.length === 0){
            transformedIngredients = <p>Please start adding ingredients!</p>;
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-botton" />
        </div>
    );
}

export default burger;