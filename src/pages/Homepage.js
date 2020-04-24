import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div id="homepage">
      <Jumbotron>
        <h1>MaxCap.</h1>
      </Jumbotron>
      <Container>
        <h2>Welcome climber!</h2>
        <p>
          Prism la croix tote bag, chartreuse normcore lomo umami. Artisan
          cardigan migas, austin 90's cronut stumptown vape tilde tousled forage
          meggings. Tote bag banh mi sriracha mlkshk health goth, subway tile
          letterpress fingerstache green juice 90's kickstarter tbh. Wayfarers
          authentic fam helvetica waistcoat VHS disrupt PBR&B glossier sartorial
          bushwick. Coloring book truffaut photo booth, kickstarter air plant
          single-origin coffee aesthetic cray meh four loko. Squid messenger bag
          ugh skateboard roof party. Bitters tacos gochujang migas kickstarter
          bushwick. Tofu kale chips activated charcoal pork belly.{" "}
        </p>
        <Link to="/gyms">
          <button>Search your gym!</button>
        </Link>
      </Container>
    </div>
  );
}
