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
        setDetails(result.forms);
        // console.log(details);
      });
  }
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <h1>Details</h1>

      <div>Loading details for {pokeId}</div>
      <div>
        {details.map((ability, index) => (
          <p key={index}> Ability Name: {abilities.ability.name}</p>
        ))}
      </div>
    </>
  );
}
