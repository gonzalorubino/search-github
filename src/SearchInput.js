import React from "react";

// Boostrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// FA
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./css/SearchInput.css";

library.add(faSearch);

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.wordToSearch(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="search-input row mt-5">
        <Form className="col-8" onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control
              type="text"
              placeholder="What do you want to search on Github today?"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button type="submit" value="Submit">
            Go! <FontAwesomeIcon icon="search" size="lg" />
          </Button>
        </Form>
      </div>
    );
  }
}

/**
 * 
 */
export default SearchInput;
