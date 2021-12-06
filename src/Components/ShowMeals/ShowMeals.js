import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ShowMeals = (props) => {
    const { strMealThumb, strMeal, strInstructions, idMeal } = props.meals;
    const history = useHistory();
    const handleClick = () => {
        history.push(`/mealinfo/${idMeal}`)
    }
    return (
        <Col>
            <Card style={{ width: '18rem' }} className='w-100 my-2'>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title className="fw-bold fs-4">{strMeal}</Card.Title>
                    <span className="fw-bold fs-6">Recipe :</span>
                    <Card.Text>
                        {strInstructions.slice(0, 100)}
                    </Card.Text>
                    <Button variant="primary" onClick={handleClick}>
                        See more
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ShowMeals;