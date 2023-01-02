import React, { useRef, useState } from "react";
import { arrayContact } from "./mycontacts";
import "./popup.css";
import ShowContact from "./showcontact";
export default function MyContacts() {
  const [contacts, setContacts] = useState(arrayContact);
  const [display, setDisplay] = useState(false);
  const [popup, setPopup] = useState(false);

  const inputName = useRef("");
  const inputPhone = useRef("");
  const inputEmail = useRef("");

  const showContacts = () => {
    setDisplay(true);
  };
  const togglePopup = () => {
    setPopup(!popup);
  };

  const addContact = (e) => {
    e.preventDefault();
    setContacts((oldContact) => [
      ...oldContact,
      {
        name: inputName.current.value,
        phone: inputPhone.current.value,
        email: inputEmail.current.value,
      },
    ]);
    togglePopup();
  };
  if (popup) {
    document.body.classList.add("scroll");
  } else {
    document.body.classList.remove("scroll");
  }

  return (
    <div>
      <div className="divShow">
        <button onClick={showContacts}>display contacts</button>

        <button onClick={togglePopup}>add contact</button>
      </div>
      {popup && (
        <>
          <div onClick={togglePopup} className="overlay "></div>
          <div className="popup-content">
            <form onSubmit={addContact}>
              <label>name</label>
              <input type={"text"} ref={inputName} required />
              <label>phone</label>
              <input type={"number"} ref={inputPhone} required />
              <label>email</label>
              <input type={"email"} ref={inputEmail} />
              <button>add contact</button>
            </form>

            <button className="closePopup" onClick={togglePopup}>
              Annuler
            </button>
          </div>
        </>
      )}
      {display ? <ShowContact arraycon={contacts} /> : null}
    </div>
  );
}
