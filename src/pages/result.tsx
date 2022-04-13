import React from "react";
import "../sass/styles.scss";

function Result(): JSX.Element {
  return (
    <>
      <div className="reward">
        <div className="reward_close">✖</div>
        <img src="../images/otorgar.png"></img>
        <p>¡Felicidades!</p>
      </div>
      <div className="points">
        <p className="points_text">Preguntas acertadas:</p>
        <p className="points_number">
          <span>16</span>
        </p>

        <p className="points_text">Tiempo Invertido:</p>
        <p className="points_number">
          <span>16</span>
        </p>
      </div>
      <div className="reward_text">
        <p>Si quedas finalista, nos pondremos en contacto contigo</p>
      </div>
      <div className="icons">
        <img src="../images/facebook.png"></img>
        <img src="../images/twitter.png"></img>
      </div>
    </>
  );
}
export default Result;
