import React from "react";
import "./destination.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function DestinationsSection() {
  return (
    <>
      <h2 className="headings">Popular Destinations</h2>
      <p className="headings">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.Voluptas nihil
        rem maiores earum ex inventore facere ut. Voluptates voluptatibus
        dignissimos,
        <br /> placeat pariatur quam iste numquam eligendi, dolorum dicta quidem
        accusamus? Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <br />
        Obcaecati blanditiis soluta neque voluptas mollitia incidunt pariatur
        fugiat. Velit exercitationem unde voluptas ex quasi nihil similique
        expedita, quas ut eos? Voluptatem?
      </p>
      <div id="card_container">
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            width={200}
            height={200}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Udaipur_City_Palace.jpg/1200px-Udaipur_City_Palace.jpg"
          />
          <Card.Body>
            <Card.Title>Udaipur</Card.Title>
            <Card.Text>
              The capital of the Mewar Kingdom, is a city in the western Indian
              state of Rajasthan. Founded by Maharana Udai Singh II in 1559, its
              set around a series of artificial lakes and is known for its
              lavish royal residences. City Palace, overlooking Lake Pichola, is
              a monumental complex of 11 palaces, courtyards and gardens, famed
              for its intricate peacock mosaics.
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            width={200}
            height={200}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslqhjLcvy-BSgm5z3MU3XonGvKjX15VVyfQ&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Sydney</Card.Title>
            <Card.Text>
              The capital of New South Wales and one of Australia's largest
              cities, is best known for its harbourfront Sydney Opera House,
              with a distinctive sail-like design. Massive Darling Harbour and
              the smaller Circular Quay port are hubs of waterside life, with
              the arched Harbour Bridge and esteemed Royal Botanic Garden nearby
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img
            variant="top"
            width={200}
            height={200}
            src="https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="
          />
          <Card.Body>
            <Card.Title>Goa</Card.Title>
            <Card.Text>
              Goa is a state in western India with coastlines stretching along
              the Arabian Sea. Its long history as a Portuguese colony prior to
              1961 is evident in its preserved 17th-century churches and the
              areas tropical spice plantations. Goa is also known for its
              beaches, ranging from popular stretches at Baga and Palolem to
              those in laid-back fishing villages such as Agonda.
            </Card.Text>
            <Button variant="primary">Book Now</Button>
          </Card.Body>
        </Card>
        <div id="img_container">
          <div class="gridItem1">
            <img
              src="https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img1"
            />
          </div>
          <div class="gridItem2">
            <img
              src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img2"
            />
          </div>
          <div class="gridItem3">
            <img
              src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img3"
            />
          </div>
          <div class="gridItem4">
            <img
              src="https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img4"
            />
          </div>
          <div class="gridItem5">
            <img
              src="https://images.pexels.com/photos/413960/pexels-photo-413960.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationsSection;
