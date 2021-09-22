import QuizApp from './QuizNew';



export default function TestSection({ data }) {
  // console.log("Main data i passed , ", data);

  let s_quiz;
  
  if (data.video) {
    s_quiz = <QuizApp t_details={data} key = {Date.now()+Math.random()}/>
  }
  

  let slug = "quiz_"+data.slug;
  let hslug = "#quiz_" + data.slug;

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
          # {data.Lesson_Title}
        </button>
      </h2>
      <div
        id={slug}
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <ul>{s_quiz}</ul>
        </div>
      </div>
    </div>
  );
}
