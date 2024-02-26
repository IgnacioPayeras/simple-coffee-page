import React, { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import "../stylesheets/cardContainer.css";

const CardContainer = () => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCoffeeData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="general-container">
      <h1>Our Collection</h1>
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
      <div>
        <Button name="All products"/>
        <Button name="Available Now"/>
      </div>
      <div className="cards-container">
        {coffeeData.map((coffee) => (
          <Card
            key={coffee.id}
            name={coffee.name}
            image={coffee.image}
            price={coffee.price}
            rating={coffee.rating}
            votes={coffee.votes}
            popular={coffee.popular}
            available={coffee.available}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
