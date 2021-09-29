export default function QuizProgressBar({progress}) {
    return (
        <div className="progress ">
            <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">{progress}%</div>
        </div>
    )
}