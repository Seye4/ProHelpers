import "../pages/css/ServiceList.css";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ data }) => {
  if (!data) {
    return (
      <h4 style={{ textAlign: "center" }}> There seems to be an error </h4>
    );
  }

  return (
    <section className="section service-list">
      {data.map((item) => {
        return (
          <ServiceCard
            key={item.id}
            id={item.id}
            picture={item.src}
            name={item.name}
            info={item.info}
          />
        );
      })}
    </section>
  );
};

export default ServiceList;
