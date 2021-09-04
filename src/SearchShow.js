import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Octokit } from "@octokit/core";

import "./css/SearchShow.css";
import Loading from "./components/Loading";
import ResultRow from "./components/ResultRow";

const SearchShow = ({history}) => {
  const location = useLocation();
  const useMountEffect = (fun) => useEffect(fun, []);
  const octokit = new Octokit({
    auth: "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",
  });
  const [search, setSearch] = useState();

  function itemList(){
    let items =[];

    if(search && search.data){
     items = search.data.items.map((item,idx) => (
       <ResultRow key={idx} item={item} />
     ));
    }
    
    return items;
  }

  async function octoDataReq(val) {
    const githubSearch = await octokit.request(`GET /search/repositories`, {
      q: val || location.search,
    });

    setSearch(githubSearch);
  };

  useMountEffect(octoDataReq);
  
  history.listen((change) => {
    if (change.search !== location.search){
      setSearch(null);
      octoDataReq(change.search);
    }
  });

  return (
    <div className="search-input row mt-5">
      {search ? (
        itemList()
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
