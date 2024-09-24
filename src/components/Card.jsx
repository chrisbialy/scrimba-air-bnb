
import star from "../assets/Star.png";

function Card(props) {
  let badgeText
    if (props.swimmer.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.swimmer.location === "Online") {
        badgeText = "ONLINE"
    }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={props.swimmer.coverImg}
        className="card--image"
        alt="Image of Katie Zaferes."
      />
      <div className="card--stats">
        <img 
            src={star} 
            className="card--star" 
            alt="Star icon." 
            />
        <span>{props.swimmer.stats.rating}</span>
        <span className="gray">({props.swimmer.stats.reviewCount}) • </span>
        <span className="gray">{props.swimmer.location}</span>
      </div>
      <h2>{props.swimmer.title}</h2>
      <p>
        <span className="bold">From ${props.swimmer.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
