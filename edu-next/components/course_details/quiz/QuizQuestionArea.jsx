import QuizProgressBar from './QuixProgressbar';
import QuizOptions from './QuizOptions';

export default function QuizQuestionArea({ data }) {
    console.log("Question i receive sent ", data);

    let questions;

    // item.test.forEach(qst => {
    //     console.log("qst ", qst);
        questions = (
            <>
                <div class="d-flex">
                <div class="">
                <h5 className="p-1">{data.Question}</h5>
                </div>
                <div class="ml-auto">
                    <button className="btn bg-dark text-light p-2">20 Sec</button>
                </div>
            </div>
            <hr></hr>
            <div class="container pt-2">
                
            <ul class="answers">
                    <QuizOptions />
                    <QuizOptions />
                    <QuizOptions />
                    <QuizOptions />
                </ul>
                <div className="row m-2">
                    <div className="col-6">
                        <button class="submit">Submit</button>
                        
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
    // })

    return (
        <>
            {questions}
        </>
    )
}