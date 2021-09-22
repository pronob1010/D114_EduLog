export default function QuizOptions({item, index, handleChange}) {

    // console.log("sdfasdf ",item, index);
    return (
        <li className="btn btn-light">
            <input type="checkbox" id={item.id} value={index} onChange={(e) => handleChange(e, index)}/>
            <label for="answer_3">{item.option_title}</label>
        </li>
    )
}