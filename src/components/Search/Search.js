import React, { Fragment, useState } from "react";

import { FiSearch } from "react-icons/fi";
import ActiveSearch from "./components/ActiveSearch";

function Search() {
  const [searchState, setSearchState] = useState(false);
  return (
    <Fragment>
      {searchState ? (
        <ActiveSearch />
      ) : (
        <div
          onClick={() => setSearchState(false)}
          className="flex items-center cursor-pointer  justify-between pl-5 pr-2 py-2 border border-mute shadow-md rounded-full"
        >
          <div class="grid grid-cols-4 divide-mute text-sm gap-7 divide-x text-center text-gray">
            <div className="text-center">What's needed</div>
            <div className="text-center">Where</div>
            <div className="text-center">When</div>
            <div className="text-center">How long</div>
          </div>
          <div className="bg-primary h-10 w-10 flex items-center justify-center rounded-full text-white">
            <FiSearch size={20} />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Search;
