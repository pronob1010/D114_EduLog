import CoursesBox from '../CoursesBox/coursebox';
export default function CoursesList(){
    return(
        <>
        <br></br>
        <section className="trending-courses-area pd-top-5 pd-bottom-140">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Most Trending Courses</h2>
                    </div>
                </div>
                <div className="col-lg-12">
                    <ul className="edl-nav nav nav-pills">
                        <li className="nav-item">
                            <button className="nav-link active" id="pills-1-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-1">All Course</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-2-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-2">Python</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3">UI
                                Design</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-4-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-4">Php</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-5-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-5">HTML</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" id="pills-6-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-6">CSS</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-1">
                            <div className="course-slider owl-carousel">
                                    <CoursesBox />
                                    <CoursesBox />
                                    <CoursesBox />
                                    <CoursesBox />
                                    <CoursesBox />
                                    <CoursesBox />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-2">
                            <div className="course-slider owl-carousel">
                                    <CoursesBox />
                                    <CoursesBox />
                                    <CoursesBox />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-3">
                            <div className="course-slider owl-carousel">
                                <CoursesBox />
                                <CoursesBox />
                                <CoursesBox />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-4">
                            <div className="course-slider owl-carousel">
                            <CoursesBox />
                            <CoursesBox />
                            <CoursesBox />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-5">
                            <div className="course-slider owl-carousel">
                            <CoursesBox />
                            <CoursesBox />
                            <CoursesBox />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-6">
                        <div className="course-slider owl-carousel">
                            <CoursesBox />
                            <CoursesBox />
                            <CoursesBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}