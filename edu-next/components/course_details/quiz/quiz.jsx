// import "./question.js";
import { useEffect } from "react";
import Link from 'next/link'; 

export default function Quiz() {
  console.log("Quiz com");
  
  var start = document.querySelector(".statguide");
  var quizApp = document.querySelector(".quiz-app");

  useEffect(() => {
    var quizApp = document.querySelector(".quiz-app");
    var pullets = document.querySelector(".pullets-parent .pullets");
    var questionArea = document.querySelector(".question-area");
    var title = document.querySelector(".question-area h2");
    var answers = document.querySelector(".answers");
    var submitButton = document.querySelector("button.submit");
    var result = document.querySelector(".results");
    var timeShow = document.querySelector(".time-down");
    var current = 0;
    var answerCount = 0;
    var duration = "30"; //in second
    var timeDownNum;
    var statue;

    //GET
    var myRequist = new XMLHttpRequest();
    myRequist.open(
      "GET",
      "https://raw.githubusercontent.com/alaa-sufi/json-files/main/question.json",
      true
    );
    myRequist.send(); 

    myRequist.onreadystatechange = function () {
      console.log(quizApp);
      if (this.status === 200 && this.readyState === 4) {
        //start time-down
        timeDown(duration);

        var questionObj = JSON.parse(this.responseText);
        var questionLength = questionObj.length;

        //set question length
        document.querySelector(".info .count").innerHTML =
          "Questions Count: <span>" + questionLength + "</span>";

        //set pullets
        setPullets(questionLength);

        //set qustions
        setQustion(questionObj, current);
        ////////////////////////////////////////
        ///////////on click submit/////////////
        //////////////////////////////////////
        submitButton.onclick = function () {
          //clear time-down
          clearInterval(timeDownNum);

          //get currect answers count
          CurrectAnswers(questionObj);

          //Color pullets
          colorPullets();
          //change question
          current++;
          if (current < questionLength) {
            //start time-down
            timeDown(duration);
            answers.innerHTML = "";
            setQustion(questionObj, current);
            //add on clsss to pullets
            pullets.querySelectorAll("span")[current].classList.add("on");
          } else {
            //hidden  question-area & pullets-parent
            questionArea.classList.add("finish");
            document
              .querySelector(".pullets-parent .time-down")
              .classList.add("finish");
            //show in results
            result.style.display = "block";
            if (answerCount < Number.parseInt(questionLength / 2)) {
              result.innerHTML = `<span className="bad">Bad</span>,${answerCount} from ${questionLength}`;
            } else if (answerCount == questionLength) {
              result.innerHTML = `<span className="perfect">Perfect</span>,${answerCount} from ${questionLength}`;
            } else {
              result.innerHTML = `<span className="good">Good</span>,${answerCount} from ${questionLength}`;
            }
          }
        };
      }
    };


    //functions

    function setQustion(questionObj, num) {
      //set title
      title.innerText = questionObj[num].title;

      //set answers
      for (let i = 1; i <= 4; i++) {
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.type = "radio";
        input.id = `answer_${i}`;
        input.name = "answer";
        input.dataset.answer = questionObj[current][`answer_${i}`];
        //set first input is checked
        if (i == 1) {
          input.checked = true;
        }
        let label = document.createElement("label");
        label.htmlFor = `answer_${i}`;
        label.appendChild(
          document.createTextNode(questionObj[num][`answer_${i}`])
        );
        li.appendChild(input);
        li.appendChild(label);
        answers.appendChild(li);
      }
    }

    function setPullets(length) {
      for (let i = 0; i < length; i++) {
        if (i == 0) {
          pullets.innerHTML += "<span className='on'></span>";
        } else {
          pullets.innerHTML += "<span></span>";
        }
      }
    }

    function CurrectAnswers(questionObj) {
      statue = false;
      //get the currect answer fr a
      let currectAnswer = questionObj[current]["right_answer"];
      let chooseAnswerArr = document.getElementsByName("answer");
      let chooseAnswer;
      chooseAnswerArr.forEach((input) =>
        input.checked ? (chooseAnswer = input.dataset.answer) : ""
      );
      if (currectAnswer == chooseAnswer) {
        answerCount++;
        statue = true;
      }
    }

    function timeDown(duration) {
      var minute,
        second,
        currentDuration = duration;
      timeDownNum = setInterval(() => {
        minute = Number.parseInt(currentDuration / 60);
        second = Number.parseInt(currentDuration % 60);
        minute < 10 ? (minute = "0" + minute) : "";
        second < 10 ? (second = "0" + second) : "";
        timeShow.innerHTML = minute + ":" + second;
        currentDuration--;
        if (currentDuration < 0) {
          clearInterval(timeDownNum);
          submitButton.click();
        }
      }, 1000);
    }

    function colorPullets() {
      if (statue) {
        pullets.querySelectorAll("span")[current].classList.add("correct");
      } else {
        pullets.querySelectorAll("span")[current].classList.add("wrong");
      }
    }
  });

  // function startquizapp() {
  //   console.log("hii");
  //   start.classList.add('hide');
  //   quizApp.classList.remove('hide');
  // }

  return (
    <>
      <div className="statguide">
        <h5 className="">Rules:</h5>
        <div>
          <li>You will get 20 sec for eatch.</li>
          <li>You will get 20 sec for eatch.</li>
          <li>You will get 20 sec for eatch.</li>
        </div>
        
        <button className="btn btn-sm btn-primary" >START</button>
     
      </div>

      <div className="quiz-app ">
        <div className="info">
          <div className="container">
            <div className="row">
              <div className="category">
                Section : <span>HTML</span>
                </div>
                <div class ="count"></div>
              </div>
            </div>
          </div>
          <div className="question-area">
            <div className="container">
              <h2></h2>
              <ul className="answers"></ul>
              <button className="submit">Submit Answers</button>
            </div>
          </div>
          <div className="pullets-parent">
            <div className="container">
              <div className="row">
                <div className="pullets"></div>
                <div className="time-down"></div>
                <div className="results"></div>
              </div>
            </div>
          </div>
        </div>
      
      </>
      );
}
