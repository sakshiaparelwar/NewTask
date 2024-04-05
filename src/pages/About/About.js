import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Destination/destination.css";

function About() {
  return (
    <div>
      <p className="headings">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptas nihil
        rem maiores earum ex inventore facere ut. Voluptates voluptatibus
        dignissimos <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptas nihil
        rem maiores earum ex inventore facere ut. Voluptates voluptatibus
        dignissimos
      </p>
      <div class="container my-4">
        <div class="row featurette justify-content-center align-items-center">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              It all started with Travelera's idea
              <span class="text-muted"> It'll blow your mind.</span>
            </h2>
            <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, eaque saepe! Saepe deleniti explicabo nihil sint est
              iure consequatur nemo, amet dolore molestias dignissimos, dolorum
              placeat. Hic fugiat eum qui.
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div class="row featurette justify-content-center align-items-center">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              The first ever startup.
              <span class="text-muted"> See for yourself.</span>
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ipsam, esse explicabo repellendus veniam quam fugit nemo nulla
              nostrum et, blanditiis doloribus aperiam aspernatur architecto
              modi? Illum saepe animi nihil?
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div class="row featurette justify-content-center align-items-center">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              Our first ever building formed
              <span class="text-muted"> It'll blow your mind.</span>
            </h2>
            <p class="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              ipsam, esse explicabo repellendus veniam quam fugit nemo nulla
              nostrum et, blanditiis doloribus aperiam aspernatur architecto
              modi? Illum saepe animi nihil?
            </p>
          </div>
          <div class="col-md-5">
            <img
              class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
