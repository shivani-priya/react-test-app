import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { pokeId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [details, setDetails] = useState([]);
  function fetchDetails() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(res => res.json())
      .then(result => {
        setIsLoaded(true);
        setDetails(result.game_indices);
        // console.log(result.game_indices);
      });
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <h1>Details</h1>

      <div>Loading details for {pokeId}</div>
      <div className="details-container">
        {details.map(details => (
          <p>Name: {details.version.name}</p>
        ))}
      </div>
    </>
  );
}
