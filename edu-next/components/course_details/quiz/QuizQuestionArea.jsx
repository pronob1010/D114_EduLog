import QuizProgressBar from './QuixProgressbar';
import QuizOptions from './QuizOptions';
import { useState } from 'react';

export default function QuizQuestionArea({ data, handleChange }) {
    // console.log("Question i receive sent ", data);




    let questions;

    let choice_list = data.choices.map((item, index) => {


        return <QuizOptions item={item} index={index} handleChange={handleChange} />
    })

    questions = (
        <>
            <div class="d-flex">
                <div class="">
                    <p>(C:{data.Course} - L:{data.Lesson})</p>
                    <h5 className="p-1">{data.Question}</h5>
                </div>
                <div class="ml-auto">
                    <button className="btn bg-dark text-light p-2">20 Sec</button>
                </div>
            </div>
            <hr></hr>
            <div class="container pt-2">

                <ul class="answers">
                    {choice_list}
                </ul>
                <div className="row m-2">
                    <div className="col-6">
                        <button class="submit">Previous</button>
                    </div>
                    <div className="col-6">
                        <button class="submit">Next</button>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="p-2 ">
                <QuizProgressBar />
            </div>
        </>
    )

    return (
        <>
            {questions}
        </>
    )
}