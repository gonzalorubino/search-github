import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/SearchInput.css";

library.add(faSearch);

const SearchHome = ()=> {
    let history = useHistory();
    const location = useLocation();
    const [value, setValue] = useState(location.search ? location.search.slice(3) : '');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        history.push({
          pathname: "/search",
          search: `?q=${value}`,
        });
        event.preventDefault();
    };

    return (
      <div className="search-input row">
        <Form className="col-8" onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="Please enter a search term"
              value={value}
              onChange={handleChange}
            />
            <Button type="submit" value="Submit">
                <FontAwesomeIcon icon="search" size="lg" />
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
}

/**
 *
 */
export default SearchHome;
