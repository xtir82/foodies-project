import React from 'react';

const MealPage = ({params}) => {
    return (
        <div>
            <h1>Meal: {params.meal}</h1>
        </div>
    );
};

export default MealPage;