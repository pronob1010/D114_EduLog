import TestimonialBlock from './testimonialBlock';

export default function Testimonial(){
    return(
        <section className="testimonial-courses-area pd-bottom-90">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>People <i style={{color: 'var(--main-color)'}} className="fa fa-heart"></i></h2>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="testimonial-slider owl-carousel">
                        <TestimonialBlock />
                        <TestimonialBlock />
                        <TestimonialBlock />
                        <TestimonialBlock />
                        <TestimonialBlock />
                        <TestimonialBlock />
                        <TestimonialBlock />
                        <TestimonialBlock />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}