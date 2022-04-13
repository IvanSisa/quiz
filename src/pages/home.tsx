import React from "react";
import "../sass/styles.scss";
import { Link } from "react-router-dom";

function Home(): JSX.Element {
  return (
    <>
      <div className="home size">
        <img src="/images/rocket.png" alt="rocket logo"></img>

        <h1>Prueba tu capacidad con esta Quiz</h1>
        <h2>Responde lo más rapido que puedas y podrás ganar muchos premios</h2>
        <Link to="/question0">
          <button>Empezar Quiz</button>
        </Link>
      </div>
    </>
  );
}
export default Home;
