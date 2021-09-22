import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LessonSection from "./../../components/course_details/LessonSection";
import Alert from "./../../components/alert/alert";
import Iframe from "./../../components/course_details/iframe_block";
import { useRouter } from "next/router";
import Quiz from "../../components/course_details/quiz/quiz";
import QuizApp from "../../components/course_details/quiz/QuizNew";
import TestSection from './../../components/course_details/quiz/TestSection';

export default function courseDetaisls() {
  
  const [isLoading, setisLoading] = useState(true);
  const [CourseDetails, setCourseDetails] = useState([]);
  
  let courselist = useSelector((state) => state.course.CourseList);
  
  //for test
  let courselist2 = useSelector((state) => state.course.CourseList2);

  const router = useRouter();
  const [final_id, setfinal_id] = useState();

  const dispatch = useDispatch();

  useEffect(async () => {

    const link = window.location.href;
    const id = link.replace("http://localhost:3000/courses/", "");
    const fid = id.replace("#", "");
    setfinal_id(fid);

    const content = courselist.find((courselist) => courselist.id == fid);

    if (content) {
      setCourseDetails(content);
    } 
    else {
      const fetchCourseListFromApi = async (final_id) => {
        const res = await fetch(
          "http://localhost:8000/api/data/course/" + Number(final_id)
        );
        const data = await res.json();

        if (data) {
          setCourseDetails(data);
        }
      };

      fetchCourseListFromApi(fid);
    }
    setisLoading(false);
  }, []);

  const date = new Date(CourseDetails.update_date).toUTCString();

  var lessons = CourseDetails.lesson;

  let lessonList;

  if (lessons) {
    lessonList = lessons.map((item, i) => {
      return <LessonSection data={item} key={i} />;
    });
  }

  var tests = CourseDetails.lesson;

  let testsList;

 
  if (tests) {
    testsList = tests.map((item, i) => {
      // console.log(item);
      return <TestSection data={item} key={i} />;
    });
  }

  let alertText;

  const logedUser = useSelector((state) => state.user.log.userId);

  let enrolled_checker = useSelector((state) =>
    state.user.Userdata.find((ele) => ele.id == logedUser)
  );

  const enrollHandeler = () => {
    const datetime = new Date().toLocaleString();

    console.log("Course id ", CourseDetails.id);
    console.log("Course price ", CourseDetails.course_price);
    console.log("Loged user id ", logedUser);
    console.log("Enrolled time ", datetime);

    if (CourseDetails.course_price == 0) {
      dispatch({
        type: "FREE_ENROLL_ATTEMP",
        value: {
          id: Math.random(),
          enrollment_date: datetime,
          Course: CourseDetails.id,
          // 'course_price':CourseDetails.course_price,
          students: logedUser,
        },
      });
      router.push("#");
    }
    // else {
    //   router.push("#")
    //   console.log("Paid Block");

    //   alertText = (<Alert user={logedUser} message={"Pay First"} />);
    // }

    <Alert user={logedUser} message={"Pay First"} />;
  };

  let enroll_bar;
  let enroll_log = false;

  if (enrolled_checker) {
    if (enrolled_checker.course_enrolled.length > 0) {
      if (
        enrolled_checker.course_enrolled.find((ele) => ele.Course == final_id)
      ) {
        // console.log(enrolled_checker.course_enrolled);
        enroll_log = true;
      }
    }
  }
  if (!enroll_log) {
    enroll_bar = (
      <div className="buying-wrap d-flex align-items-center pd-bottom-35 pd-top-5">
        <h2 className="price d-inline-block mb-0">৳ 300</h2>
        <button
          className="btn btn-sm btn-base ms-auto mx-2 p-1"
          onClick={enrollHandeler}
        >
          Enroll Now
        </button>
        <button className="btn btn-sm btn-base-light mx-2 p-1" href="#">
          Add to Cart
        </button>
        <div className="ms-auto d-425-none">
          <a href="#">
            <i className="far fa-heart"></i>
          </a>
          <a className="ms-4" href="#">
            <i className="fa fa-share me-2"></i>share
          </a>
        </div>
      </div>
    );
  } 
  else {
    alertText = <Alert user={logedUser} message={"Happy learning !"} />;
  }

  const v_link_data = useSelector((state) => state.course.cliked.vlink);

  let ifram;
  let def_link = "https://www.youtube.com/embed/2hwbZIjqJg4";

  let v_state;

  v_state = v_link_data;
  if (v_state) {
    console.log("Updated v_state ", v_state);
  }

  let uid = new Date().getUTCMilliseconds();
  if (v_state) {
    ifram = <Iframe link={v_state} id={uid} />;
  } else {
    ifram = <Iframe link={def_link} id={uid} />;
  }

  let WillLearn;

  // for (let ob in CourseDetails.willlearn){
  //   console.log(ob);
  // }

  // console.log( CourseDetails.willlearn)

  console.log("test_block ", CourseDetails.lesson);

let test_block;
  if(!isLoading){
    // test_block = <Quiz />
    test_block = <QuizApp />
  }

  return (
    <>
      <br></br>
      <br></br>

      <section className="courses-details-area pd-top-135 pd-bottom-130">
        <div className="container">
          {alertText}

          <div className="row">
            <div className="col-lg-8">
              <div className="single-course-wrap mb-0">
                {ifram}

                <div className="wrap-details">
                  <h5>
                    <a href="#">{CourseDetails.course_title}</a>
                  </h5>
                  <p>{CourseDetails.course_description}</p>
                  <hr></hr>
                  <div className="user-area">
                    <div className="user-details">
                      <img src="/assets/img/author/1.png" alt="img" />
                      <a href="#"> {CourseDetails.instractor} </a>
                    </div>
                    <div className="date ms-auto">
                      <i
                        className="fa fa-calendar-alt me-2"
                        style={{ color: "var(--main-color)" }}
                      ></i>
                      {new Date(CourseDetails.update_date)
                        .toUTCString()
                        .slice(4, 17)}
                    </div>
                  </div>
                  {enroll_bar}
                </div>
              </div>
              <ul className="course-tab nav nav-pills pd-top-25">
                <li className="nav-item">
                  <button
                    className="nav-link active"
                    id="pill-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-01"
                    type="button"
                    role="tab"
                    aria-controls="pills-01"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="pill-2"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-02"
                    type="button"
                    role="tab"
                    aria-controls="pills-02"
                    aria-selected="false"
                  >
                    Exercise Files
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link"
                    id="pill-3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-03"
                    type="button"
                    role="tab"
                    aria-controls="pills-03"
                    aria-selected="false"
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-01"
                  role="tabpanel"
                  aria-labelledby="pill-1"
                >
                  <div className="overview-area">
                    <h5>Course details</h5>
                    <p>
                      New to web design? Start here first. Instructor James
                      Williamson introduces the fundamental concepts, tools, and
                      learning paths for web design. He explains what it means
                      to be a web designer, the various areas of specialization,
                      and whether web design is the right hobby or career for
                      you. Along the way, he talks to five prominent designers
                      and developers, who have each found success in a different
                      corner of the web.
                    </p>
                    <div className="bg-gray">
                      <h6>What Will I Learn?</h6>
                      <div className="row">
                        <div className="col-md-12">
                          <ul>
                            {WillLearn}
                            <li>
                              <i className="fa fa-check"></i>Create a static
                              homepage useful for most websites, or a blog like
                              homepage useful for bloggers.
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Create an affiliate
                              site for passive, recurring income
                            </li>
                            <li>
                              <i className="fa fa-check"></i>Create a Responsive
                              Website that looks good on any browser.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <h6>Requirements</h6>
                    <ul>
                      <li>
                        <i className="fa fa-check"></i>No previous experience or
                        software needed!
                      </li>
                      <li>
                        <i className="fa fa-check"></i>An open mind!
                      </li>
                    </ul>
                    <h6 className="mt-5">Skills covered in this course</h6>
                    <ul>
                      <li>
                        <i className="fa fa-check"></i>This course is great for
                        beginners who are still learning the financial markets.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>This course is perfect
                        for you if you are taking over an existing Wordpress
                        website, or want to build one from scratch, but don't
                        know where to start.
                      </li>
                      <li>
                        <i className="fa fa-check"></i>If you want to learn to
                        master Wordpress without getting bogged down with
                        technical jargon, this course is for you.
                      </li>
                    </ul>
                    <div className="reviewers-area">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="media d-flex align-items-center">
                            <div className="thumb">
                              <img src="/assets/img/author/01.png" alt="img" />
                            </div>
                            <div className="media-body">
                              <h6>Jessica Jessy</h6>
                              <span>Product Designer</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <p className="review-content">
                            Great for the people that are willing to improve and
                            learn. Please show up to the course with an open
                            mind because the instructor got his own views and
                            philosophy towards design that might challenge your
                            own. This course will teach you...
                          </p>
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
                            4.9
                          </span>
                          (76)
                        </div>
                        <div className="ms-auto">
                          <i
                            className="fa fa-user me-2"
                            style={{ color: "var(--main-color)" }}
                          ></i>
                          6794 students
                        </div>
                        <div className="ms-md-5 ms-auto mb-0">
                          <i
                            className="far fa-user me-2"
                            style={{ color: "var(--main-color)" }}
                          ></i>
                          6794 students
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-02"
                  role="tabpanel"
                  aria-labelledby="pill-2"
                >
                  <div className="col-lg-12 sidebar-area">
                    <div className="widget widget-accordion-inner">
                      <h5 className="widget-title border-0">Quiz</h5>
                      <div className="accordion" id="accordionExample">
                        {testsList}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-03"
                  role="tabpanel"
                  aria-labelledby="pill-3"
                >
                  <h5>Rating & Review</h5>
                  <div className="row">
                    <div className="col-sm-8">
                      <div className="single-input-wrap">
                        <textarea
                          rows="2"
                          placeholder="Enter Your Project Details...."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="row mx-auto">
                        <div className="col-12">
                          <div
                            className="rating"
                            style={{ textalign: "center" }}
                          >
                            <input name="stars" id="e1" type="radio" />
                            <label htmlFor="e1">★</label>
                            <input name="stars" id="e2" type="radio" />
                            <label htmlFor="e2">★</label>
                            <input name="stars" id="e3" type="radio" />
                            <label htmlFor="e3">★</label>
                            <input name="stars" id="e4" type="radio" />
                            <label htmlFor="e4">★</label>
                            <input name="stars" id="e5" type="radio" />
                            <label htmlFor="e5">★</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-base ms-auto "
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
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
                              <img src="/assets/img/author/01.png" alt="img" />
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
                              <svg
                                className="svg-inline--fa fa-star fa-w-18"
                                ariahidden="true"
                                focusable="false"
                                dataprefix="fa"
                                dataicon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                className="svg-inline--fa fa-star fa-w-18"
                                ariahidden="true"
                                focusable="false"
                                dataprefix="fa"
                                dataicon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                className="svg-inline--fa fa-star fa-w-18"
                                ariahidden="true"
                                focusable="false"
                                dataprefix="fa"
                                dataicon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                className="svg-inline--fa fa-star fa-w-18"
                                ariahidden="true"
                                focusable="false"
                                dataprefix="fa"
                                dataicon="star"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                                ></path>
                              </svg>
                              <svg
                                className="svg-inline--fa fa-star-half-alt fa-w-17"
                                ariahidden="true"
                                focusable="false"
                                dataprefix="fa"
                                dataicon="star-half-alt"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 536 512"
                                data-fa-i2svg=""
                              >
                                <path
                                  fill="currentColor"
                                  d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"
                                ></path>
                              </svg>
                              4.9
                            </span>
                          </div>
                          <p className="review-content">
                            Great for the people that are willing to improve and
                            learn. Please show up to the course with an open
                            mind because the instructor got his own views and
                            philosophy towards design that might challenge your
                            own. This course will teach you...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-area">
              <div className="widget widget-accordion-inner">
                <h5 className="widget-title border-0">Lessons</h5>
                <div className="accordion" id="accordion-0">
                  {lessonList}
                </div>
              </div>
              <div className="widget widget-course-details mb-0">
                <h5 className="widget-title">Course Details</h5>
                <ul>
                  <li>
                    Level: <span>Beginner</span>
                  </li>
                  <li>
                    Categories:{" "}
                    <span>
                      <a href="#">Business</a>
                      <a href="#">Design</a>
                      <a href="#">Development</a>
                      <a href="#">Marketing</a>
                      <a href="#">WordPress</a>
                    </span>
                  </li>
                  <li>
                    Total Hour: <span>07h 30m</span>
                  </li>
                  <li>
                    Total Lessons: <span>15</span>
                  </li>
                  <li>
                    Total Enrolled: <span>5000</span>
                  </li>
                  <li>
                    Last Update: <span>August 23, 2021</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
