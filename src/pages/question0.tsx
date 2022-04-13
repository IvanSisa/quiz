import React, { useEffect, useState } from "react";
import "../sass/styles.scss";
import { useNavigate } from "react-router-dom";

function Question0(): JSX.Element {
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
    console.log(questions);

    setQuestion(questions);

    console.log({ question });
  };
  function pushQuestion0(ev: any) {
    ev.preventDefault();
    navigate("/question1");
  }

  return (
    <>
      <div className="box_questions">
        {question ? (
          <div>
            <div className="box_pages">
              <div className="pages">
                <span className="pages_number">1</span>/12
              </div>
              <div className="pages_close">✖</div>
            </div>
            <div>
              <p className="question">{`${question?.data[0].question}`}</p>
            </div>
            <div className="line"></div>
            <div className="options_boxes">
              <div className="option_box" onClick={pushQuestion0}>
                <img src={`${question?.data[0].answers[0].image}`}></img>
                <p>{`${question?.data[0].answers[0].text}`}</p>
              </div>
              <div className="option_box" onClick={pushQuestion0}>
                <img src="/images/krillin.jpg"></img>
                <p>{`${question?.data[0].answers[1].text}`}</p>
              </div>
              <div className="option_box" onClick={pushQuestion0}>
                <img src={`${question?.data[0].answers[2].image}`}></img>
                <p>{`${question?.data[0].answers[2].text}`}</p>
              </div>
              <div className="option_box" onClick={pushQuestion0}>
                <img src={`${question?.data[0].answers[3].image}`}></img>
                <p>{`${question?.data[0].answers[3].text}`}</p>
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
export default Question0;
