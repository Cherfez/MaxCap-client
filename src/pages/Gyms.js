import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

export default function Gyms() {
  return (
    <div>
      <Jumbotron id="gyms">
        <h1>Bookings</h1>
      </Jumbotron>
      <Container>
        <div>
          Prism la croix tote bag, chartreuse normcore lomo umami. Artisan
          cardigan migas, austin 90's cronut stumptown vape tilde tousled forage
          meggings. Tote bag banh mi sriracha mlkshk health goth, subway tile
          letterpress fingerstache green juice 90's kickstarter tbh. Wayfarers
          authentic fam helvetica waistcoat VHS disrupt PBR&B glossier sartorial
          bushwick.
        </div>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search gym"
            className="mr-sm-2"
          />
          <FormControl type="date" className="mr-sm-2" />
          <button>Search</button>
        </Form>
      </Container>
    </div>
  );
}
