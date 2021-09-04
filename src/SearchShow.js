import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Octokit } from "@octokit/core";

import "./css/SearchShow.css";
import Loading from "./components/Loading";

const SearchShow = () => {
  const location = useLocation();
  const useMountEffect = (fun) => useEffect(fun, []);
  const octokit = new Octokit({
    auth: "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",
  });
  const [search, setSearch] = useState("");

  async function octoDataReq() {
    const githubSearch = await octokit.request(`GET /search/code`, {
    q: location.search,
    });

    setSearch(githubSearch);
  };

  // useMountEffect(octoDataReq);

  return (
    <div className="search-input row mt-5">
      {search ? (
        search.data.items.map((item) => (
          <a href={item.repository.url}>{item.repository.name}</a>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

/**
 *
 */
export default SearchShow;
