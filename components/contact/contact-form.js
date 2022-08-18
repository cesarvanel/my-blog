import { useState, useEffect } from "react";
import styles from "./contact-form.module.css";
import Notification from "../ui/notification";

async function Sendcontact(contactdata) {
  const response = await fetch("api/contact", {
    method: "POST",
    body: JSON.stringify(contactdata),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something when wrong");
  }
}

function ContactForm() {
  const [enterdEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() =>{

    if(requestStatus === 'success' || requestStatus === 'error'){
        const timer = setTimeout(() =>{
            setRequestStatus(null)
            setRequestError(null)
        }, 3000) ; 

        return () => clearTimeout(timer) ;
    }
  },)

  async function SendNewletter(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      await Sendcontact({
        email: enterdEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail('');
      setEnteredName('');
      setEnteredMessage('') ;
    } catch (error) {
        setRequestError(error.message)
      setRequestStatus("error");
    }
  }

  let notification ; 

  if(requestStatus === 'pending'){

    notification = {
        status : 'pending',
        title : 'Sending Message',
        message : 'Your mesage is on Ways'

    }
  }

  if(requestStatus === 'success'){

    notification = {
        status : 'success',
        title : 'Successfull',
        message : 'Your mesage have stored'

    }
  }

  if(requestStatus === 'error'){

    notification = {
        status : 'error',
        title : 'Error',
        message : requestError

    }
  }
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={SendNewletter}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enterdEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && 
        <Notification 
            status = {notification.status} 
            title = {notification.title} 
            message = {notification.message} />
        }
    </section>
  );
}

export default ContactForm;
