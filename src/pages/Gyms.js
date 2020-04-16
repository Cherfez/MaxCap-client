import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import Gym from "../components/Gym/index";

const gyms = [
  {
    name: "Rock Steady",
    address: "blah",
    phone: "29879384",
    id: 1,
  },
  {
    name: "Monk",
    address: "blahblah",
    phone: "29879384",
    id: 2,
  },
];

export default function Gyms() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? gyms
    : gyms.filter((gym) =>
        gym.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

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
            value={searchTerm}
            onChange={handleChange}
          />
          <button>Search</button>
        </Form>

        <div>
          {results.map((gym) => (
            <Gym gym={gym} />
          ))}
        </div>
      </Container>
    </div>
  );
}
