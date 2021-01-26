import React from "react";
import { Link } from "react-router-dom";
export default function Listing() {
  const pokiArr = [
    { name: "bulbasaur", id: 1 },
    { name: "ivysaur", id: 2 },
    { name: "venusaur", id: 3 },
    { name: "charmander", id: 4 },
    { name: "charmeleon", id: 5 },
    { name: "charizard", id: 6 },
    { name: "squirtle", id: 7 },
    { name: "wartortle", id: 8 },
    { name: "blastoise", id: 9 },
    { name: "caterpie", id: 10 },
    { name: "metapod", id: 11 },
    { name: "butterfree", id: 12 },
    { name: "weedle", id: 13 },
    { name: "kakuna", id: 14 },
    { name: "beedrill", id: 15 },
    { name: "pidgey", id: 16 },
    { name: "pidgeotto", id: 17 },
    { name: "pidgeot", id: 18 },
    { name: "rattata", id: 19 },
    { name: "raticate", id: 20 }
  ];
  return pokiArr.map(pokemon => (
    <div>
      <Link to={'/details/'+pokemon.id}>
        {pokemon.id} {pokemon.name}
      </Link>
    </div>
  ));
}
