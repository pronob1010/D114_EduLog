import Link from "next/link";
import { useState, useEffect } from "react";
import CourseCard from "./../components/Layout/components/courses_card/coursecad";
import { useSelector } from 'react-redux';


export default function Courses() {

  const CourseList = useSelector(state => state.course.CourseList)
  
  return (
    <>
      <br></br>
      <section className="trending-courses-area pd-top-135 pd-bottom-130">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-5">
              <div className="dmne-sidebar">
                <div className="widget widget-select-inner">
                  <h4 className="widget-title">Filter</h4>
                  <ul>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault1"
                        >
                          All
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault2"
                        >
                          UI &amp; UX
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault3"
                        >
                          Animation
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault4"
                        >
                          Game Design
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault5"
                        >
                          Graphic Design
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault6"
                        >
                          Typography
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault7"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault7"
                        >
                          Web Development
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault8"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault8"
                        >
                          Photography
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault9"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault9"
                        >
                          Illustration
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault10"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault10"
                        >
                          Programing
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault11"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault11"
                        >
                          Graphics
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault12"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault12"
                        >
                          Art &amp; Design
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault13"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault13"
                        >
                          3D Design
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-select-inner">
                  <h4 className="widget-title">Level</h4>
                  <ul>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault14"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault14"
                        >
                          Beginner
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault15"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault15"
                        >
                          Intermediate
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault16"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault16"
                        >
                          Expert
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-select-inner">
                  <h4 className="widget-title">Price</h4>
                  <ul>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault17"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault17"
                        >
                          Free
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault18"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault18"
                        >
                          Paid
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-select-inner">
                  <h4 className="widget-title">Language</h4>
                  <ul>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault19"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault19"
                        >
                          English
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault20"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault20"
                        >
                          Español
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault21"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault21"
                        >
                          Yorùbá
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault22"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault22"
                        >
                          اردو
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault23"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault23"
                        >
                          لعربية
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault24"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault24"
                        >
                          বাংলা
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="single-form-check form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault25"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault25"
                        >
                          中文
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9 col-7">
              <div className="row">
                {CourseList.map((item) => {
                  return <CourseCard item={item} key={item.id} />;
                })}
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
