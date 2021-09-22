import QuizProgressBar from "./QuixProgressbar";
import QuizOptions from "./QuizOptions";
import QuizResult from "./QuizResult";
import { useEffect } from "react";
import { useState } from "react";
import QuizQuestionArea from "./QuizQuestionArea";
import { useRouter } from 'next/router';

export default function QuizApp({ t_details }) {
  // console.log("t_details ", t_details);

  let [sec1, setsec1] = useState();
  let [sec2, setsec2] = useState();
  let [sec3, setsec3] = useState();

  useEffect(() => {
    setsec1(document.querySelector(".start")),
      setsec2(document.querySelector(".question-area")),
      setsec3(document.querySelector(".result"));
  });
  let q_area;

  let onclickHandeler = () => {
    // console.log("start clicked");
    if (sec1) {
      sec1.classList.add("hide");
      sec2.classList.remove("hide");
      // sec3.classList.remove('hide');
    }
  };


  q_area = t_details.test.map(
    (item) => { return <QuizQuestionArea data={item} /> }
  )


  return (
    <>
      <div className="quiz-app">
        <div class="start d-flex p-4">
          <div class="">
            <h4>Lesson : {t_details.Lesson_Title} </h4>
            <p>You will have only one attemp.</p>
          </div>
          <div class="ml-auto">
            <button
              className="btn bg-primary text-light p-2"
              onClick={onclickHandeler}
            >
              Start
            </button>
          </div>
        </div>

        <div class="question-area hide">
          {q_area}
        </div>
      </div>

      <div className="result p-4 hide">
        <QuizResult />
      </div>
    </>
  );
}
