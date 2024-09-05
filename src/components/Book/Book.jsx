import React, { useEffect } from "react";
import "./Book.css";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Book = () => {
  useEffect(() => {
    document.documentElement.style.position = "fixed";

    return () => {
      document.documentElement.style.position = "static";
    };
  }, []);
  const history = useNavigate();

  function historyPushBack(e) {
    e.preventDefault();
    history(-1);
  }

  return (
    <div className="book">
      <form>
        <button className="close_btn" onClick={historyPushBack}>
          <IoCloseOutline />
        </button>
        <h2>Make an Appointment</h2>
        <div className="form_inputs">
          <input type="date" required />
          <input type="time" required />
          <select required>
            <option value="Choose Services 1">Choose Service 1</option>
            <option value="Choose Services 2">Choose Service 2</option>
            <option value="Choose Services 3">Choose Service 3</option>
            <option value="Choose Services 4">Choose Service 4</option>
          </select>
          <select required>
            <option value="Choose Barber">Choose Barber</option>
            <option value="Choose Barber">Jack Mardon</option>
            <option value="Choose Barber">Sunday James</option>
            <option value="Choose Barber">Jack Hallow</option>
          </select>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="email" placeholder="Email" required />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Book;
