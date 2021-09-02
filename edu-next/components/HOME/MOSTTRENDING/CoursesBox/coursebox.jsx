export default function CoursesBox(){
    return(
    <div className="item">
        <div className="single-course-wrap">
            <div className="thumb">
                <a href="#" className="cat cat-blue">Beginner</a>
                <img src="assets/img/course/1.png" alt="img" />
            </div>
            <div className="wrap-details">
                <h6>
                    <a href="category.html">PHP for Beginners - Become a PHP Master - CMS Project</a>
                </h6>
                <div className="user-area">
                    <div className="user-details">
                        <img src="assets/img/author/1.png" alt="img" />
                        <a href="#">Jessica Jessy</a>
                    </div>
                    <div className="user-rating">
                        <span><i className="fa fa-star"></i>4.9</span>(76)
                    </div>
                </div>
                <div className="price-wrap">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <a href="#">Development</a>
                        </div>
                        <div className="col-6 text-end">
                            <div className="price">$30</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}