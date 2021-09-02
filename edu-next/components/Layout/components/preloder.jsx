export default function Loader() {
  return (
    <>
      <div className="preloader" id="preloader">
        <div className="preloader-inner">
          <div id="wave1"></div>
          <div className="spinner">
            <div className="dot1"></div>
            <div className="dot2"></div>
          </div>
        </div>
      </div>

      <div className="body-overlay" id="body-overlay"></div>
    </>
  );
}
