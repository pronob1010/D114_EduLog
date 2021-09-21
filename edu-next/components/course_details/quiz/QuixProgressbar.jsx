export default function QuizProgressBar() {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" style={{ width: '50%' }} ariaValuenow="25" ariaValuemin="0" ariaValuemax="100">25%</div>
        </div>
    )
}