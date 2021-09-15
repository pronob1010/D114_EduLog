import BannerBaseLine from "./../components/HOME/Banner/BannerBaseLine";
import SubSection1 from "./../components/ABOUT/subSection1";
import CoursesList from "../components/HOME/MOSTTRENDING/CoursesList/courseslist";
import ShortOverview from "./../components/HOME/CourseOverviewSection/Section1/shortoverview";
import Testimonial from "./../components/HOME/Testimonial/testimonial";
import ClientItem from "./../components/HOME/Client-area/all-client-item";
import { useSelector } from 'react-redux';

export default function HomeMain() {
  
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <BannerBaseLine />
      <CoursesList />
      {/* <SubSection1 /> */}
      <ShortOverview />
      <CoursesList />
      <Testimonial />
      <ClientItem />
    </>
  );
}
