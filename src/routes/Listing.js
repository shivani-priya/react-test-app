import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
export default function Listing() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setPokemons(result.results);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="listing-container">
        {pokemons.map((pokemon, index) => (
          <Card className="listing-card" key={index + 1}>
            <CardContent>
              <Link to={"/details/" + (index + 1)}>
                Id: {index + 1}
                <br />
                Name: {pokemon.name}
                <br />
                <img
                  src={
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                    (index + 1) +
                    ".png"
                  }
                />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}
