import "../.././styling/card.css"

export function Card({image, timestamp, title, description}) {
    return (
        <div className="card">
            <img className="card-image" src={image} alt={title} />
            <p className="card-timestamp">{timestamp}</p>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
}