import AllClient from './client-item';

export default function ClientItem(){
    return(
        <section className="client-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="client-slider owl-carousel">
                        <AllClient />
                        <AllClient />
                        <AllClient />
                        <AllClient />
                        <AllClient />
                        <AllClient />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}