import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { useParams } from "/listing";

const User = () => {
  const params = useParams();
};

export default function Details() {
  let location = useLocation();
  return (
    <>
      <h1>Details</h1>
      <div>Loading details for {params.id}</div>
    </>
  );
}
