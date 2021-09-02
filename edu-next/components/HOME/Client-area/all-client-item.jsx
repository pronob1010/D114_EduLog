import AllClient from './client-item';

export default function ClientItem(){
    return(
        <section class="client-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="client-slider owl-carousel">
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