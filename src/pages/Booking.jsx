import React from "react";

const Booking = () => {
  return (
    <div className="booking">
      <div className="section-title">
        <h3>
          Ein Angebot <span>Einholen</span>
        </h3>
        <div className="section-line"></div>
        <p>
          Teilen Sie uns mit, welche Dienstleistung Sie benötigen und wir senden
          Ihnen ein Angebot
        </p>
      </div>
      <div className="section book-flex">
        <div>
          <h1>
            Wir bieten <br />
            <br /> Premium-, <br />
            <br /> Abonnement- sowie <br />
            <br /> individuelle Dienste an.
          </h1>
        </div>
        <form className="form form-white" action="">
          <input type="text" name="" placeholder="Name" id="" />
          <input type="email" name="" placeholder="Email" id="" />
          <textarea name="" placeholder="Ihre Nachricht" id=""></textarea>
          <button className="btn-contact" type="submit">
            einsenden
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
