import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealid } = useParams();
    const [mealDetails, setMealDetails] = useState({});
    const { strMeal, strArea, strMealThumb, strInstructions, strSource, strYoutube } = mealDetails;
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [])
    return (
        <Container>
            <h1 className="text-center my-4">Welcome to meal-Details</h1>
            <div className="col-12 col-md-6 mx-auto">
                <Card>
                    <Card.Img variant="top" src={strMealThumb} height="450" />
                    <Card.Body>
                        <Card.Title className="fs-1">Name: {strMeal}</Card.Title>
                        <span className="d-block fw-bold fs-4">{strArea} Food.</span>
                        <span className="fw-bold fs-4">Recipe :</span>
                        <Card.Text>
                            {strInstructions}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href={strSource} target="_blank">Instagram</Card.Link>
                        <Card.Link href={strYoutube} target="_blank">Youtube_Source</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default MealDetails;