import Video from "./LessonsVideo";

export default function LessonSection({ data }) {
  let s_video;

  if (data.video) {
    s_video = data.video.map((item, i) => {
      return <Video vdetails={item} key={i} />;
    });
  }
  let slug = data.slug;
  let hslug = "#" + data.slug;
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={hslug}
          aria-expanded="false"
          aria-controls={slug}
        >
          {data.Lesson_Title}
        </button>
      </h2>
      <div
        id={slug}
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <ul>{s_video}</ul>
        </div>
      </div>
    </div>
  );
}
