import React from "react";
import { Octokit } from "@octokit/core";

import "./css/SearchShow.css";
import Loading from "./components/Loading";
import ResultRow from "./components/ResultRow";


const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_KEY,
});
class SearchShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: null };
  }

  componentDidMount() {
    this.octoDataReq(this.props.location.search);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.setState({ search: null });
      this.octoDataReq(this.props.location.search);
    }
  }

  itemList() {
    let items = [];

    if (this.state.search && this.state.search.data) {
      items = this.state.search.data.items.map((item, idx) => (
        <ResultRow key={idx} item={item} />
      ));
    }

    return items;
  }

  async octoDataReq(val) {
    const githubSearch = await octokit.request(`GET /search/repositories`, {
      q: val,
    });

    this.setState({ search: githubSearch });
  }

  render() {
    return (
      <div className="search-input row mt-5">
        {this.state.search && this.state.search ? this.itemList() : <Loading />}
      </div>
    );
  }
};

/**
 *
 */
export default SearchShow;
