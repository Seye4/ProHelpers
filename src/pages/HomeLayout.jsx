import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Header } from "../components/Input";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Header />
      <NavBar />
      <section>
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
      <Footer />
    </div>
  );
};

export default HomeLayout;
