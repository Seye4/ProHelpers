import { useLoaderData } from "react-router-dom";
import "./css/Landing.css";
import axios from "axios";
import ServiceList from "../components/ServiceList";

const productsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => axios.get("/db/data.json"),
};

export const loader = (queryClient) => async () => {
  const res = await queryClient.ensureQueryData(productsQuery);

  return res.data;
};

const Services = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="services-page">
        <div className="section-title">
          <h3>
            Ünserer <span>Leistungen</span>
          </h3>
          <div className="section-line"></div>
        </div>
      </div>
      <div className="services-page-info">
        <p>
          Wir freuen uns Ihnen unsere Dienstleistungen vorzustellen! <br />{" "}
          <br />{" "}
          <span>
            {" "}
            Sie sind auf der Suche nach einem starken und innovativen Partner an
            Ihrer Seite im Bereich Gebäudereinigung? <br /> <br /> Dann nutzen
            Sie gerne diesen Link zur persönlichen, unverbindlichen
            Terminvereinbarung{" "}
          </span>{" "}
        </p>
      </div>

      <ServiceList data={data} />
    </>
  );
};

export default Services;
