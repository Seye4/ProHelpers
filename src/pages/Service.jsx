import "./css/Service.css";
import "./css/Landing.css";
import { useLoaderData, Link, useParams } from "react-router-dom";
import axios from "axios";
import SectionTitle from "../components/SectionTitle";
import ServiceTitle from "../components/ServiceTitle";
import SubMessage from "../components/SubMessage";
import ServiceProduct from "../components/ServiceProduct";
import React, { useEffect, useState, createRef } from "react";
import { products } from "../../public/db/product";
import Error from "./Error";
import Modal from "../components/Modal";
import DetailsThumb from "../components/DetailsThumb";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => axios.get("/db/data.json"),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const id = params;
    const res = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return res.data[params.id - 1];
  };

const Service = () => {
  const data = useLoaderData();

  const [detail, setDetail] = useState(products);
  const [imgIndex, setIndex] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const slug = data.slug;

  let index;

  useEffect(() => {
    index = data.index;
    const findDetail = products.filter((product) => product.slug === slug);

    // console.log(findDetail[0].slug);

    if (findDetail.length == 1) {
      setDetail(findDetail[0].items);
    } else {
      <Error />;
    }
  }, [slug]);

  const myRef = createRef();

  const handleTab = (index) => {
    const images = myRef.current.children;
    console.log(images);

    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
    setIndex(index);

    // myRef.current.children[index].className = "active";
  };

  // componentDidMount()  {
  //   const {index} = this.state;
  //   this.myRef.current.children[index].className = "active";
  // }

  return (
    <>
      <SectionTitle text1={data.name} text2="Dienstleistungen" />

      <section className="section">
        {
          <div className="details" key={data.id}>
            <div className="big-img">
              <img src={data.src[imgIndex]} alt="" />
            </div>

            <div className="box">
              {/* <div className="row">
                <h2>{data.name}</h2>
                <span>${data.price}</span>
              </div> */}

              <p dangerouslySetInnerHTML={{ __html: data.info }}></p>
              <p dangerouslySetInnerHTML={{ __html: data.moreInfo }}></p>

              <DetailsThumb images={data.src} tab={handleTab} myRef={myRef} />
              {data.img}
              {data.hasCart == "no" && (
                <Link to="/booking" className="cart">
                  Holen Sie sich Angebot
                </Link>
              )}
            </div>
          </div>
        }

        {/* <SubMessage /> */}

        {detail.map((item, index) => {
          return (
            <div key={index}>
              <h1
                className="sub-main"
                dangerouslySetInnerHTML={{ __html: item.serviceInfo }}
              ></h1>
              <p
                className="sub-main-p"
                dangerouslySetInnerHTML={{ __html: item.serviceSubInfo }}
              ></p>

              {data.hasCart == "yes" && (
                <div className="service-list">
                  <ServiceProduct data={item.products} />
                </div>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Service;
