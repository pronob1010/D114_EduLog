export default function Signup(){
    return (
        <section className="zoom-courses-area pd-top-135 pd-bottom-35 shadow">
        <div className="container">
            <div className="row justify-content-center ">
                <div className="col-lg-6">
                    <div className="contact-inner ">
                        <form className="contact-form" method="POST">
                            <div className="row">
                                <div className="col-6">
                                    <div className="single-input-wrap">
                                        <input type="text" name="firstname" placeholder="First Name"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="single-input-wrap">
                                        <input type="text" name="lastname" placeholder="Last Name"/>
                                    </div>
                                </div>
                            </div>
                            <div className="single-input-wrap">
                                <input type="text" name="username" placeholder="Username"/>
                            </div>
                            <div className="single-input-wrap">
                                <input type="email" name="email" placeholder="Email"/>
                            </div>
                            <div className="single-input-wrap">
                                <input type="password" name="password1" placeholder="Password"/>
                            </div>
                            <div className="single-input-wrap">
                                <input type="password" name="password2" placeholder="Confirm Password"/>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-3">
                                    <button type="submit" className="btn-sm btn-base w-100">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}