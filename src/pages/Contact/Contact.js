import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "../Destination/destination.css";

function Contact() {
  return (
    <div style={{ backgroundColor: "rgb(231, 231, 231)" }}>
      <h2 id="contact" className="headings">
        Contact US
      </h2>
      <p className="headings">
        If you have any questions or feedback, we'd love to hear from you! Feel
        free to reach out to our customer support team
      </p>
      <div style={{ padding: "60px" }} className="mb-3">
        <form action="#">
          <div className="mb-3">
            <label for="name" class="form-label">
              Firstname
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Firstname"
            />
          </div>
          <div className="mb-3">
            <label for="lastname" class="form-label">
              Lastname
            </label>
            <input
              type="text"
              class="form-control"
              id="Lastname"
              placeholder="Lastname"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Please describe your queries
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <Button
            type="submit"
            style={{
              borderRadius: "6px",
              width: "100px",
              background: "black",
              color: "white",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "30px" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156091!2d73.78056543154418!3d18.52459859950238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1711627033280!5m2!1sen!2sin"
          width="800"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>

        <div style={{ padding: " 0px 60px", textAlign: "center" }}>
          <h2>Get in Touch</h2>
          <Link to={"/about"}>Travelera.com</Link>
          <h6>C/o weblink In Pvt.Ltd.</h6>
          <h6>For any assistance or enquiry call us at</h6>
          <h6 style={{ fontSize: "15px" }}>
            (9:30 Am to 6:00 Pm IST, Mon to Fri)
          </h6>
          <h6 style={{ fontSize: "15px" }}>India: +91-2345678909</h6>
        </div>
      </div>
    </div>
  );
}

export default Contact;
