import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeimg from "../../assets/homeimg.jpeg";

function Home() {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={homeimg} class="d-block w-100" alt="..." id="image" />
            <div class="carousel-caption ">
              <h1>ONE STOP.</h1>
              <h3>
                We help you plan trips,holidays,meets and much more. Choose any
                place to make it your favourite.
              </h3>
              <p>
                Travelera provide almost 40+ of Holiday plans with free pickups
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
