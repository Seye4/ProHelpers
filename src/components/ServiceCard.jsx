import { Link } from "react-router-dom";

const ServiceCard = ({ id, name, picture, info }) => {
  function truncateString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength - 3) + "...";
    }
    return str;
  }

  return (
    <div className="service">
      <img className="img" src={picture[0]} alt="" />
      <div className="service-info">
        <h3>{name}</h3>
        <p>{truncateString(info, 70)}</p>
        <Link to={`/service/${id}`}>Mehr lesen</Link>
      </div>
    </div>
  );
};

export default ServiceCard;
