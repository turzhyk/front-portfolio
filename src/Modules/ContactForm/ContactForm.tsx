import React from "react";
import "./contactform.css";
export default function ContactForm() {
  return (
    <section className="contactform">
      <div className="container">
        <h2>Skontaktuj</h2>
        <form>
          <div className="user-message">
            <textarea placeholder="Treść"></textarea>
          </div>{" "}
          <div className="user-info">
            <input placeholder="Twoje imię"></input>
            <input placeholder="Twój email"></input>
            <input className="btn" type="submit" value={"Wyślij"}></input>
          </div>
        </form>
      </div>
    </section>
  );
}
