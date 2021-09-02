import ShortBlock from './shortBlock';
import InlineShortOverview from './../Section2/inlineShortOverview';

export default function ShortOverview(){
    return (
        <>
         <section className="service-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="section-title">
                        <h2>Find the right course</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in eget phasellus dui
                            tincidunt nascetur nisl nunc consequat. Arcu ultricies pulvinar enim vulputate.</p>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="category-service">
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                        <ShortBlock />
                         
                    </div>
                </div>
            </div>
        </div>
    </section>
    <InlineShortOverview />
    </>
    )
}