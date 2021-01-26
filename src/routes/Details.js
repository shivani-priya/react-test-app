import React from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { pokeId } = useParams();
  return (
    <>
      <h1>Details</h1>

      <div>Loading details for {pokeId}</div>
    </>
  );
}
