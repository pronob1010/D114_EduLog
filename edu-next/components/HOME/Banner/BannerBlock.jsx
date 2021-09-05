import Image from 'next/image'

export default function BannerBlock({category}) {
  console.log(category.image);
  return (
    <div className="item">
      <div className="single-intro-wrap">
        <div className="thumb">
          {/* <Image src={category.image} alt="img" layout='responsive' /> */}
          <img src={category.image} alt="img"/>
        </div>
        <div className="wrap-details">
          <h6>
            <a href="#">{category.Base_Category_Title}</a>
          </h6>
          <p>236 Course Available</p>
        </div>
      </div>
    </div>
  );
}
