import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';

export default function courseDetaisls(){
    const [CourseDetails, setCourseDetails] = useState([]);
    const [instructor, setinstructor] = useState([]);

  useEffect( async () => {
    const link = window.location.href; 
    const id = link.replace("http://localhost:3000/courses/","");

    const response = await fetch('http://localhost:8000/api/data/course/'+Number(id))
    const content = await response.json();
    setCourseDetails(content);

    const response2 = await fetch('http://localhost:8000/api/auth/'+content.instractor)
    .then(res => res.json())
    .then(data => {
        // console.log(data.id, data.username);
        setinstructor([data.id, data.username]);
    });


}, []);

const date = new Date(CourseDetails.update_date).toUTCString();
console.log("block ",date);

  return(
    <>
    <br></br>
    <br></br>
    <section className="courses-details-area pd-top-135 pd-bottom-130">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="single-course-wrap mb-0">
                        <div className="thumb">
                            <a className="play-btn" href="#"><i className="fa fa-play"></i></a>
                            <img src="/assets/img/course/video.png" alt="img"/>
                        </div>
                        <div className="wrap-details">
                            
                                {/* <h5><a href="#">{CourseDetails.course_title}</a></h5> */}
                         
                                 <h5><a href="#">{CourseDetails.course_title}</a></h5>
                            <p>{CourseDetails.course_description}</p>
                            <hr></hr>
                            <div className="user-area">
                                <div className="user-details">
                                    <img src="/assets/img/author/1.png" alt="img"/>
                                    <a href="#">{instructor[1]}</a>
                                </div>
                                <div className="date ms-auto">
                                    <i className="fa fa-calendar-alt me-2" style={{color:'var(--main-color)'}}></i>{new Date(CourseDetails.update_date).toUTCString().slice(4,17)}
                                </div>
                                <div className="ms-auto">
                                    <i className="fa fa-user me-2" style={{color:'var(--main-color)'}}></i>Enrolled 5k 
                                </div>
                            </div>
                            <div className="buying-wrap d-flex align-items-center">
                                <h2 className="price d-inline-block mb-0">$30</h2>
                                <a className="btn btn-base ms-auto" href="#">Add to Cart</a>
                                <a className="btn btn-base-light ms-3" href="#">Buy Now</a>
                                <div className="ms-auto d-425-none">
                                    <a href="#"><i className="far fa-heart"></i></a>
                                    <a className="ms-4" href="#"><i className="fa fa-share me-2"></i>share</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="course-tab nav nav-pills pd-top-100">
                        <li className="nav-item">
                            <button className="nav-link active" id="pill-1" data-bs-toggle="pill" data-bs-target="#pills-01"
                                type="button" role="tab" aria-controls="pills-01" aria-selected="true">Overview</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pill-2" data-bs-toggle="pill" data-bs-target="#pills-02"
                                type="button" role="tab" aria-controls="pills-02" aria-selected="false">Exercise
                                Files</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pill-3" data-bs-toggle="pill" data-bs-target="#pills-03"
                                type="button" role="tab" aria-controls="pills-03" aria-selected="false">Reviews</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-01" role="tabpanel" aria-labelledby="pill-1">
                            <div className="overview-area">
                                <h5>Course details</h5>
                                <p>New to web design? Start here first. Instructor James Williamson introduces the
                                    fundamental concepts, tools, and learning paths for web design. He explains what it
                                    means to be a web designer, the various areas of specialization, and whether web
                                    design is the right hobby or career for you. Along the way, he talks to five
                                    prominent designers and developers, who have each found success in a different
                                    corner of the web.
                                </p>
                                <div className="bg-gray">
                                    <h6>What Will I Learn?
                                    </h6>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><i className="fa fa-check"></i>Know how to configure Wordpress for best
                                                    results
                                                </li>
                                                <li><i className="fa fa-check"></i>Understand plugins & themes and how to
                                                    find/install them</li>
                                                <li><i className="fa fa-check"></i>Protect their Wordpress website from
                                                    hackers and spammers</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li><i className="fa fa-check"></i>Create a static homepage useful for most
                                                    websites, or a blog like homepage useful for bloggers.</li>
                                                <li><i className="fa fa-check"></i>Create an affiliate site for passive,
                                                    recurring income
                                                </li>
                                                <li><i className="fa fa-check"></i>Create a Responsive Website that looks
                                                    good on any browser.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h6>Requirements</h6>
                                <ul>
                                    <li><i className="fa fa-check"></i>No previous experience or software needed!
                                    </li>
                                    <li><i className="fa fa-check"></i>An open mind!</li>
                                </ul>
                                <h6 className="mt-5">Skills covered in this course
                                </h6>
                                <ul>
                                    <li><i className="fa fa-check"></i>This course is great for beginners who are still
                                        learning the financial markets.
                                    </li>
                                    <li><i className="fa fa-check"></i>This course is perfect for you if you are taking over
                                        an existing Wordpress website, or want to build one from scratch, but don't know
                                        where to start.</li>
                                    <li><i className="fa fa-check"></i>If you want to learn to master Wordpress without
                                        getting bogged down with technical jargon, this course is for you.
                                    </li>
                                </ul>
                                <div className="reviewers-area">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="media d-flex align-items-center">
                                                <div className="thumb">
                                                    <img src="/assets/img/author/01.png" alt="img"/>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Jessica Jessy</h6>
                                                    <span>Product Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <p className="review-content">Great for the people that are willing to improve
                                                and learn. Please show up to the course with an open mind because the
                                                instructor got his own views and philosophy towards design that might
                                                challenge your own. This course will teach you...</p>
                                        </div>
                                    </div>
                                    <div className="meta-area d-flex">
                                        <div className="user-rating ms-0">
                                            <span>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star-half-alt"></i>
                                                4.9</span>(76)
                                        </div>
                                        <div className="ms-auto">
                                            <i className="fa fa-user me-2" style={{color:'var(--main-color)'}}></i>6794
                                            students
                                        </div>
                                        <div className="ms-md-5 ms-auto mb-0">
                                            <i className="far fa-user me-2" style={{color:'var(--main-color)'}}></i>6794
                                            students
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-02" role="tabpanel" aria-labelledby="pill-2">
                            <div className="col-lg-12 sidebar-area">
                                <div className="widget widget-accordion-inner">
                                    <h5 className="widget-title border-0">Course Syllabus</h5>
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    Introduction
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="main-container">
                                                        <div className="quiz-app">
                                                            <div className="info">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="category">
                                                                            Section : <span>HTML </span>
                                                                        </div>
                                                                        <div className="count"></div>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="heading-2">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse-2"
                                                    aria-expanded="false" aria-controls="collapse-2">
                                                    1. Setting the Stage for Strategic
                                                    Thinking
                                                </button>
                                            </h2>
                                            <div id="collapse-2" className="accordion-collapse collapse"
                                                aria-labelledby="heading-2" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <div className="main-container">
                                                        <div className="quiz-app">
                                                            <div className="info">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="category">
                                                                            Section : <span>HTML</span>
                                                                        </div>
                                                                        <div className="count"></div>
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
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="heading-3">
                                                <button className="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapse-3"
                                                    aria-expanded="false" aria-controls="collapse-3">
                                                    2. Developing Your Strategic Thinking
                                                </button>
                                            </h2>
                                            <div id="collapse-3" className="accordion-collapse collapse"
                                                aria-labelledby="heading-3" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <li>
                                                            <i className="fa fa-lock"></i>
                                                            <span>
                                                                <p>Embrace the strategic thinking mindset</p>
                                                                <span>1m 24s</span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-lock"></i>
                                                            <span>
                                                                <p>Strategy: Not just for corporations
                                                                </p>
                                                                <span>1m 24s</span>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <i className="fa fa-lock"></i>
                                                            <span>
                                                                <p>The sequence of strategy
                                                                </p>
                                                                <span>1m 24s</span>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-03" role="tabpanel" aria-labelledby="pill-3">
                            <h5>Rating & Review</h5>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="single-input-wrap">
                                        <textarea rows="2" placeholder="Enter Your Project Details...."></textarea>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="rating" style={{textalign: "center"}}>
                                        <input name="stars" id="e1" type="radio"/><label htmlFor="e1">★</label>
                                        <input name="stars" id="e2" type="radio"/><label htmlFor="e2">★</label>
                                        <input name="stars" id="e3" type="radio"/><label htmlFor="e3">★</label>
                                        <input name="stars" id="e4" type="radio"/><label htmlFor="e4">★</label>
                                        <input name="stars" id="e5" type="radio"/><label htmlFor="e5">★</label>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="reviewers-area">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="media align-items-center">
                                                <div className="thumb">
                                                    <img src="/assets/img/author/01.png" alt="img"/>
                                                </div>
                                                <div className="media-body">
                                                    <h6>Jessica Jessy</h6>
                                                    <span>Product Designer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9">
                                            <div className="user-rating ms-0">
                                                <span>
                                                    <svg className="svg-inline--fa fa-star fa-w-18" ariahidden="true" focusable="false" dataprefix="fa" dataicon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                    <svg className="svg-inline--fa fa-star fa-w-18" ariahidden="true" focusable="false" dataprefix="fa" dataicon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                    <svg className="svg-inline--fa fa-star fa-w-18" ariahidden="true" focusable="false" dataprefix="fa" dataicon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                    <svg className="svg-inline--fa fa-star fa-w-18" ariahidden="true" focusable="false" dataprefix="fa" dataicon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                                                    <svg className="svg-inline--fa fa-star-half-alt fa-w-17" ariahidden="true" focusable="false" dataprefix="fa" dataicon="star-half-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 536 512" data-fa-i2svg=""><path fill="currentColor" d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path></svg> 
                                                    4.9</span>
                                            </div>
                                            <p className="review-content">Great for the people that are willing to improve
                                                and learn. Please show up to the course with an open mind because the
                                                instructor got his own views and philosophy towards design that might
                                                challenge your own. This course will teach you...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 sidebar-area">
                    <div className="widget widget-accordion-inner">
                        <h5 className="widget-title border-0">Course Lessons</h5>
                        <div className="accordion" id="accordion-0">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading-1">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                        Introduction
                                    </button>
                                </h2>
                                <div id="collapse-1" className="accordion-collapse collapse show"
                                    aria-labelledby="heading-1" data-bs-parent="#accordion-0">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                <a className="play-btn" href="#"><i className="fa fa-play"></i></a>
                                                <span>
                                                    <p>Welcome to strategic thinking</p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        1. Setting the Stage for Strategic
                                        Thinking
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>Embrace the strategic thinking mindset</p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>Strategy: Not just for corporations
                                                    </p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>The sequence of strategy
                                                    </p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        2. Developing Your Strategic Thinking
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>Embrace the strategic thinking mindset</p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>Strategy: Not just for corporations
                                                    </p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>The sequence of strategy
                                                    </p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">
                                        4. Collaborating, Sharing, and Exporting
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>Embrace the strategic thinking mindset</p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>Strategy: Not just for corporations
                                                    </p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                            <li>
                                                <i className="fa fa-lock"></i>
                                                <span>
                                                    <p>The sequence of strategy
                                                    </p>
                                                    <span>1m 24s</span>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget widget-course-details mb-0">
                        <h5 className="widget-title">Course Details</h5>
                        <ul>
                            <li>Level: <span>Beginner</span></li>
                            <li>Categories: <span><a href="#">Business</a><a href="#">Design</a><a
                                        href="#">Development</a><a href="#">Marketing</a><a
                                        href="#">WordPress</a></span></li>
                            <li>Total Hour: <span>07h 30m</span></li>
                            <li>Total Lessons: <span>15</span></li>
                            <li>Total Enrolled: <span>5000</span></li>
                            <li>Last Update: <span>August 23, 2021</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}