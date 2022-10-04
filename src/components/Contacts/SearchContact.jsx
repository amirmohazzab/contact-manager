import React from "react";
import { PURPLE} from "../../helpers/colors"

const SearchContact = ({query, search}) => {
  
  return (
    <div className="input-group mx-2 w-75">
      
      <input
        type="text"   
        value={query.text}
        onChange={search}
        className="form-control"
        placeholder="Contact Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
      <span
        dir="rtl"
        className="input-group-text"
        id="basic-addon1"
        style={{ backgroundColor: PURPLE }}
      >
        <i className="fa fa-search" />
      </span>
    </div>
  );
};

export default SearchContact;
