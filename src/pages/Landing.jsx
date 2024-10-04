import "./css/Landing.css";
import cleaning_1 from "../assets/img/cleaning_img.png";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import ServiceList from "../components/ServiceList";
import ContactUs from "./ContactUs";
import About from "./About";
import Slider from "../components/Slider.jsx";
import Hero from "../components/Hero.jsx";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => axios.get("/db/data.json"),
};

export const loader = (queryClient) => async () => {
  const res = await queryClient.ensureQueryData(featuredProductsQuery);

  return res.data;
};

const Landing = () => {
  const data = useLoaderData();

  return (
    <>
      <Slider />

      <Hero />

      <About />

      <section className="">
        <div className="section-title">
          <h3>
            ÜNSERER <span>LEISTUNGEN</span>
          </h3>
          <div className="section-line"></div>
          <p>Wir freuen uns Ihnen unsere Dienstleistungen vorzustellen!</p>
        </div>
      </section>

      <ServiceList data={data} />

      <section className="section">
        <div className="section-title">
          <h3>
            Besondere <span>Dienstleistungen</span>
          </h3>
          <div className="section-line"></div>
          <p>Reinigung</p>
        </div>

        <article className="featured">
          <div className="featured-img">
            <img src={cleaning_1} alt="" />
          </div>

          <div className="article-info">
            <h3>
              Sie sind auf der Suche nach einem starken und innovativen Partner
              an Ihrer Seite im Bereich Gebäudereinigung?
            </h3>
            <p>
              Dann nutzen Sie gerne diesen Link zur persönlichen,
              unverbindlichen Terminvereinbarung:
            </p>
            <Link to="/contact" className="btn-article">
              Beratung termin Vereinbaren
            </Link>
          </div>
        </article>
      </section>

      <ContactUs />
    </>
  );
};

export default Landing;
