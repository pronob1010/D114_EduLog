
import BannerBlockList from './BannerBlockList';

export default function BannerBaseLine(){
    return (
        <>
        <section className="banner-area" style={{backgroundImage: 'url(assets/img/banner/0.jpg)'}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-8 align-self-center">
                    <div className="banner-inner text-md-start text-center">
                        <h1>Find the Best <span>Courses</span> & Upgrade <span>Your Skills.</span></h1>
                        <div className="banner-content">
                            <p>Edufie offers professional training classes and special features to help you improve your skills.</p>                         
                        </div>
                        <div className="single-input-wrap">
                            <input type="text" placeholder="Search your best courses" />
                            <button><i className="fa fa-search"></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <br></br>
    <BannerBlockList />
    </>
    )
}