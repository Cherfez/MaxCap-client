import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Gym from "../components/Gym/index";
import { selectGyms } from "../store/gym/selectors";
import { fetchGyms } from "../store/gym/actions";
import Loading from "../components/Loading";

import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

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

  if (!gyms) {
    return <Loading />;
  }

  const results = !searchTerm
    ? gyms
    : gyms.filter((gym) =>
        gym.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div id="gyms">
      <Jumbotron fluid>
        <h1>Gyms</h1>
      </Jumbotron>
      <div className="containerr">
        <div className="intro">
          <p>
            Underneat you will find all the climbing gyms that work with MaxCap
            as their primary booking system. <br />
            To check availability and book a session please select a climbing
            gym. To filter gyms out you can use the search bar below.
          </p>
        </div>

        <Form inline>
          <FormControl
            type="text"
            placeholder="Search gym"
            className="mr-sm-2"
            value={searchTerm}
            onChange={handleChange}
          />
        </Form>

        <div className="allGyms">
          {results.map((gym) => (
            <Gym gym={gym} key={gym.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
