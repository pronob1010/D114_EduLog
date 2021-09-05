import Image from 'next/image'

export default function TopBanner(){
    return(
        <>
        <section className="banner-area instructor-banner p-0" style={{backgroundColor: '#11142D'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 col-8">
                    <div className="thumb">
                       <img src="/assets/img/instructor.png" alt="img"  />
                    </div>
                </div>
                <div className="col-md-7 col-sm-10 align-self-center">
                    <div className="banner-inner text-md-start text-center">
                        <h1 className="text-white">Make a global impact</h1>
                        <div className="banner-content me-0">
                            <p className="text-white">Create an online video course and earn money by teaching people around the world.</p>                         
                        </div>
                        <a className="btn btn-base" href="instructor-details.html">Become an Instrucotor</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}