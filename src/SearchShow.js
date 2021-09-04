import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Octokit } from "@octokit/core";

import "./css/SearchShow.css";

const SearchShow = () => {
  const location = useLocation();
  const octokit = new Octokit({
    auth: "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",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    /** async function search() {
      const githubSearch = await octokit.request(`GET /search/code`, {
        q: location.search,
      });

      setSearch(search);
    }

    search(); */
  }, []);

  return (
    <div className="search-input row mt-5">
      {search}
    </div>
  );
};

/**
 *
 */
export default SearchShow;
