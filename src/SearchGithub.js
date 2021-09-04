import React from "react";
import { Octokit } from "@octokit/core";

import Container from "react-bootstrap/Container";
import SearchInput from "./SearchInput";

import "./css/Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

const octokit = new Octokit({
  auth: "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",
});

class SearchGithub extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleSearch(search) {
    console.log("val", search);
    /**const githubSearch = await octokit.request(`GET /search/code`, {
      q: search,
    });*/

    //return githubSearch;
  }

  render() {
    return (
      <Container className="p-3">
        <header>
          <img
            className="header-logo"
            src="./GithubLogo.png"
            alt="Github Search Logo"
          />
        </header>
        <SearchInput wordToSearch={this.handleSearch}></SearchInput>
      </Container>
    );
  }
}

export default SearchGithub;
