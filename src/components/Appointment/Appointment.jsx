import React from "react";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="container outside">
      <div className="appointment">
        <form action="https://getform.io/f/bjjelovb" method="POST">
          <h3>Make an Appointment</h3>
          <input type="text" required name="name" placeholder="Name" />
          <input type="email" required name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <p>
            I'm available for commissions and collaborations, and i'm excited to
            hear from you about new projects.
          </p>
          <button className="btn">Send Message</button>
        </form>
        <div className="contact_info">
          <div className="contact_info_div">
            <h5>Visit our studio at</h5>
            <p>221B Baker Street, P. O Box 3 Park Road, UK - 215852</p>
          </div>
          <div className="contact_info_div">
            <h5>Message Us</h5>
            <p>Support@colorlib.net</p>
            <p>(+44) 120034509</p>
          </div>
          <div>
            <h5>Working Hours</h5>
            <div>
              <div className="contact_hours">
                <span> Monday - Friday </span> <span>:09.00 - 23.00 </span>
              </div>
              <div className="contact_hours">
                <span> Sunday</span> <span>:09.00 - 16.00s </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
