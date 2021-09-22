export default function QuizOptions({item}) {
    return (
        <li className="btn btn-light">
            <input type="checkbox" id="{item.id}" name="answer" data-answer="To Add Breakline"/>
            <label for="answer_3">{item.option_title}</label>
        </li>
    )
}