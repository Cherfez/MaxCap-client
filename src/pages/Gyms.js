import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import Gym from "../components/Gym/index";
import { selectGyms } from "../store/gym/selectors";
import { fetchGyms } from "../store/gym/actions";

export default function Gyms() {
  const [searchTerm, setSearchTerm] = useState("");
  const gyms = useSelector(selectGyms);
  // console.log("gyms", gyms);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGyms());
  }, [dispatch]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? gyms
    : gyms.filter((gym) =>
        gym.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div id="gyms">
      <Jumbotron>
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
            <Gym gym={gym} key={gym.id} />
          ))}
        </div>
      </Container>
    </div>
  );
}
