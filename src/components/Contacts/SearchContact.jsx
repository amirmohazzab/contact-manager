import React, {useContext} from "react";
import { PURPLE} from "../../helpers/colors";
import { ContactContext } from "../../context/contactContext";

const SearchContact = () => {

  const {contactQuery, contactSearch} = useContext(ContactContext);
  
  return (
    <div className="input-group mx-2 w-75">
      
      <input
        type="text"   
        value={contactQuery.text}
        onChange={contactSearch}
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
