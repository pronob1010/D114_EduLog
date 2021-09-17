export default function Iframe(link) {
    console.log("component", link.link);
    return (
        <div className="thumb">
    <iframe width="750" height="418" src={link.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    )
}