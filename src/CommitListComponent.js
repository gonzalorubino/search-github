import { Octokit } from "@octokit/core";
import React, { useState, useEffect } from 'react';

function CommitListComponent() {
  const [searchData, setSearchData] = useState([]);
  const octokit = new Octokit({
    auth: "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",
  });

  useEffect(() => {

    async function search() {
      const githubSearch = await octokit.request(`GET /search/code`, {
        q: "reactjs",
      });

      setSearchData(search);
    }

    search();
  }, []);

  return (
    <ul>
      {searchData.length > 0 &&
        searchData.map((data)=>
          <li>
            {data}
          </li>
        )}
    </ul>
  );
};

/** <li key={commit.commit.sha}>
          {commit.commit.author.name}: {commit.commit.message}
        </li> */

export default CommitListComponent;