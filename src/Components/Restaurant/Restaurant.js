import React, { useEffect, useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import ShowMeals from '../ShowMeals/ShowMeals';

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearch = event => {
        const searchText = event.target.value;
        setSearchText(searchText);
    }

    return (
        <div>
            <Form.Control type="text" placeholder="Search Here" className="w-75 mx-auto my-2" onChange={handleSearch} />
            <Container>
                <Row xs={1} md={2} lg={3} xl={4} className="g-md-2">
                    {
                        meals.map(meal => <ShowMeals
                            meals={meal}
                            key={meal.idMeal}
                        ></ShowMeals>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Restaurant;