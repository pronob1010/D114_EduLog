import QuizProgressBar from './QuixProgressbar';
import QuizOptions from './QuizOptions';
import QuizResult from './QuizResult';

export default function QuizApp() {
    return (
        <>
            <div className="quiz-app">
                <div class="question-area">
                    <div class="d-flex">
                        <div class="">
                            <h2>Lesson : Introduction </h2>
                            <p>There may be multiple options as correct answer. </p>
                        </div>
                        <div class="ml-auto">
                            <button className="btn btn-danger">30 Sec</button>
                        </div>
                    </div>


                    <hr></hr>
                    <div class="container pt-3">
                        <h4 className="p-1">What Is The Tag That Not Exists in HTML ?</h4>
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
                </div>
            </div>

            <div className="info">
            <QuizResult />
            </div>
        </>
    )
}