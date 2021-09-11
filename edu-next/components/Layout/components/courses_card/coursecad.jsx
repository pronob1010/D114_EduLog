import Link from 'next/link';
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';


export default function CourseCard({item}){

  const iid = item.id;
  // console.log(iid);
    const [instractor, setinstractor] = useState([]);

    const [category, setcategory] = useState([]);

    useEffect( async()=>{
        const response = await fetch('http://localhost:8000/api/auth/'+item.instractor)
        .then(response => response.json())
        .then(data => {
            // console.log(data.id, data.username);
            setinstractor([data.id, data.username]);
        });

        // console.log(instractor);

        const res = await fetch('http://localhost:8000/api/data/base-categories/'+ item.Course_Base_Category)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setcategory([data.id, data.Base_Category_Title, data.slug]);
        });
    },[]);

    // console.log("category list", category);
    const router = useRouter()

    function coursedetails(e){
      console.log("clicked");
      const theTarget = e.target.attributes.pass.value;
      
      router.push('courses/'+`${theTarget}`)
      
    }

    return (
        <div className="col-xl-4 col-md-6">
                  <div className="single-course-wrap">
                    <div className="thumb">
                      <a href="#" className="cat cat-blue">
                      {item.level}
                      </a>
                      <img src={item.thumbnail} alt="img" />
                    </div>
                    <div className="wrap-details">
                      <h6>
                        <Link href={`courses/${item.id}`} pram={instractor[1]}>
                          <a onClick={coursedetails} pass={item.id}>{item.course_title}</a>
                        </Link>
                      </h6>
                      <div className="user-area">
                        <div className="user-details">
                          <img src="assets/img/author/1.png" alt="img"/>
                          <a href="#">{instractor[1]}</a>
                        </div>
                        <div className="user-rating">
                          <span>
                            <svg
                              className="svg-inline--fa fa-star fa-w-18"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fa"
                              data-icon="star"
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
                            4.9
                          </span>
                        </div>
                      </div>
                     <hr></hr>
                      <div className="price-wrap">
                        <div className="row align-items-center">
                          <div className="col-3 col-sm-6">
                            <a href="#"><b>{category[1]}</b></a>
                          </div>
                          <div className="col-6 col-sm-6 text-end">
                            <div className="price">{item.course_price}<span><b>৳</b></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    )
}