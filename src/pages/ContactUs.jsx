import React from "react";

const ContactUs = () => {
  return (
    <section className="section">
      <div className="section-title">
        <h3>
          Kontaktieren <span>Sie uns</span>
        </h3>
        <div className="section-line"></div>
        <p>
          Nehmen Sie noch heute Kontakt mit uns auf. Unser Team steht Ihnen
          gerne für alle Ihre Fragen zur Verfügung und unterstützt Sie bei Ihren
          Anliegen. Füllen Sie einfach das untenstehende Formular aus und wir
          werden uns in Kürze bei Ihnen melden. Wir freuen uns, von Ihnen zu
          hören
        </p>
      </div>

      <form className="form" action="">
        <input type="text" name="" placeholder="Name" id="" />
        <input type="email" name="" placeholder="Email" id="" />
        <textarea name="" placeholder="Ihre Nachricht" id=""></textarea>
        <button className="btn-contact" type="submit">
          einsenden
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
