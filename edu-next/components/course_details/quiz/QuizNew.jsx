import QuizProgressBar from "./QuixProgressbar";
import QuizOptions from "./QuizOptions";
import QuizResult from "./QuizResult";
import { useEffect, useReducer } from "react";
import { useState } from "react";
import QuizQuestionArea from "./QuizQuestionArea";
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import _, { cond } from 'Lodash';

const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "CURRENT_TEST":
      action.value.map((question) => {
        question.choices.map(item => {
          item.checked = false;
        });
      })

      return action.value;

    case "ANSWER":
      {
        console.log("handleAnswerChange clicked.");

        const questions = _.cloneDeep(state);
        questions[action.questionId].choices[action.optionIndex].checked = action.value;

      }
    default:
      return state;

  }
}

export default function QuizApp({ t_details }) {
  // console.log("t_details ", t_details);
  // const dispatch = useDispatch();

  let [sec1, setsec1] = useState();
  let [sec2, setsec2] = useState();
  let [sec3, setsec3] = useState();


  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    setsec1(document.querySelector(".start")),
      setsec2(document.querySelector(".question-area")),
      setsec3(document.querySelector(".result"));

    dispatch({
      type: "CURRENT_TEST",
      value: t_details.test,
    })

  }, [qna]);

  let q_area;

  let onclickHandeler = () => {
    // console.log("start clicked");
    if (sec1) {
      sec1.classList.add("hide");
      sec2.classList.remove("hide");
      // sec3.classList.remove('hide');
    }
  };

  function handleAnswerChange(e, index) {
    dispatch({
      type: "ANSWER",
      questionId: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }

  let qlen = 0;
  if (qna){
  qlen = qna.length;
}
  
  // handelNextButton
  function nextQuestion(){
    if(currentQuestion <= qlen) {
      setCurrentQuestion(prevCurrent => prevCurrent + 1);
    }
  }

  // handelPreviousButton
  function prevQuestion(){
    if(currentQuestion >= 1 && currentQuestion <= qlen) {
      setCurrentQuestion(prevCurrent => prevCurrent - 1);
    }
  }

  const percentage = qlen > 0 ? ((currentQuestion + 1) / qlen)*100 : 0;

  // const percentage = 0;

  if (qna) {
    // console.log("currentQuestion checker ", qna[currentQuestion]);

    q_area = <QuizQuestionArea data={qna[currentQuestion]} handleChange={handleAnswerChange} next={nextQuestion} prev={prevQuestion} progress = { percentage }/>

    // q_area = qna.map(
    //   (item) => { return <QuizQuestionArea data={item} /> }
    // )
  }

  return (
    <>
      <div className="quiz-app">
        <div class="start d-flex p-4 hide">
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

        <div class="question-area">
          {q_area}
        </div>
      </div>

      <div className="result p-4 hide">
        <QuizResult />
      </div>
    </>
  );
}
