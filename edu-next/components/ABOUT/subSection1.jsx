import Image from 'next/image'

export default function SubSection1(){
    return(
        <>
<div className="text-center pd-top-5 pd-bottom-115">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-8">
            <div className="section-title">
                <h2>Discover your potential</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet .</p>
            </div>
        </div>
    </div>
    <div className="row justify-content-center">
        <div className="col-lg-4 col-sm-6">
            <div className="single-intro-wrap-2">
                <div className="thumb">
                   <img src="/assets/img/intro/01.png" alt="img"  />
                </div>
                <div className="wrap-details">
                    <h4><a href="#">Earn money</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui praesent nam fermentum, est neque, dignissim. Phasellus feugiat elit vulputate convallis.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-6">
            <div className="single-intro-wrap-2">
                <div className="thumb">
                   <img src="/assets/img/intro/02.png" alt="img" />
                </div>
                <div className="wrap-details">
                    <h4><a href="#">Inspire students</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui praesent nam fermentum, est neque, dignissim. Phasellus feugiat elit vulputate convallis.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-sm-6">
            <div className="single-intro-wrap-2">
                <div className="thumb">
                   <img src="/assets/img/intro/03.png" alt="img" />
                </div>
                <div className="wrap-details">
                    <h4><a href="#">Join our community</a></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui praesent nam fermentum, est neque, dignissim. Phasellus feugiat elit vulputate convallis.</p>
                </div>
            </div>
        </div>
    </div>
</div>            
</div>
</>
)
}