export default function Profile() {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="admin-dashboard-section">
        <div className="container admin-dashboard-side">
          <div className="main-header">
            <div className="header-wraper">
              <div className="row">
                <div className="col-xl-6">
                  <span className="header-user">
                    <a href="#">
                      <img src="/assets/img/author/02.png" alt="img" />
                    </a>
                    <span>
                      Hello,
                      <h5>Ramjan Ali Anik</h5>
                    </span>
                  </span>
                </div>
                <div className="col-xl-6 align-self-center text-lg-end">
                  <div className="d-lg-flex align-items-center">
                    <div className="user-rating text-center d-inline-block">
                      <span className="d-block">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="far fa-star"></i>
                      </span>
                      4.0 (172 Ratings)
                    </div>
                    <a className="header-btn btn btn-white" href="#">
                      Create a new course
                    </a>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-xl-12">
                  <div className="dashboard-profile-area">
                    <a className="edit-btn" href="#">
                      <i className="fa fa-pencil-alt me-2"></i>Edit
                    </a>
                    <ul>
                      <li>
                        <span>Registration Date</span>Faiday, 20 Dec 2020, 10:00
                        AM
                      </li>
                      <li>
                        <span>First Name</span>Ramjan Ali
                      </li>
                      <li>
                        <span>Last Name</span>Anik
                      </li>
                      <li>
                        <span>Uasername</span>ramjanalianik
                      </li>
                      <li>
                        <span>Email</span>demo@email.com
                      </li>
                      <li>
                        <span>Phone Number</span>+123 12 24 567
                      </li>
                      <li>
                        <span>Skil/Occupation</span>UX Designer & Web Developer
                      </li>
                      <li>
                        <span>Bio</span>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Auctor laoreet ornare morbi tortor in
                        quis enim integer. Massa et mus odio adipiscing lectus
                        arcu rutrum odio id. Lobortis turpis ligula lobortis
                        ullamcorper sem luctus. Interdum sit quam dictum at
                        mauris.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
