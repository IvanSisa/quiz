import React, { useEffect, useState } from "react";
import "../sass/styles.scss";
import { useNavigate } from "react-router-dom";

function Question2(): JSX.Element {
  const navigate = useNavigate();
  const [question, setQuestion] = useState<any>();
  console.log(question);
  useEffect(() => {
    console.log(useEffect);
    takeData();
  }, []);
  const takeData = async () => {
    const data = await fetch(`https://aq6009.gways.org/prueba-front/get`);
    const questions = await data.json();
    setQuestion(questions);
  };
  function pushQuestion2(ev: any) {
    ev.preventDefault();
    navigate("/result");
  }
  return (
    <>
      <div className="box_questions">
        {question ? (
          <div>
            <div className="box_pages">
              <div className="pages">
                <span className="pages_number">3</span>/12
              </div>
              <div className="pages_close">✖</div>
            </div>
            <div>
              <p className="question">{`${question?.data[2].question}`}</p>
            </div>
            <div className="line"></div>
            <div className="options_boxes">
              <div className="option_box" onClick={pushQuestion2}>
                <img src={`${question?.data[2].answers[0].image}`}></img>
                <p>{`${question?.data[2].answers[0].text}`}</p>
              </div>
              <div className="option_box" onClick={pushQuestion2}>
                <img src={`${question?.data[2].answers[1].image}`}></img>
                <p>{`${question?.data[2].answers[1].text}`}</p>
              </div>
              <div className="option_box" onClick={pushQuestion2}>
                <img src={`${question?.data[2].answers[2].image}`}></img>
                <p>{`${question?.data[2].answers[2].text}`}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
}
export default Question2;
