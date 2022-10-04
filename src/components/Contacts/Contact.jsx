import React from "react";
import { Link } from "react-router-dom";
import {CURRENTLINE, ORANGE, RED, CYAN, PURPLE} from "../../helpers/colors"

const Contact = ({contact, confirmDelete}) => {

  return (
    <div className="col-md-6">
      <div style={{ backgroundColor: CURRENTLINE }} className="card my-2">
        <div className="card-body">
          <div className="row align-itms-center d-flex justify-content-around">
            <div className="col-md-4 col-sm-4 my-auto">
              <img
                src={contact.photo}
                alt={contact.fullname}
                style={{ border: `1px solid ${PURPLE}`, width: "200px" }}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-7 col-sm-7 my-auto">
              <ul className="list-group">
                <li className="list-group-item list-group-item-dark">
                  Fullname:
                  <span className="fw-bold">{contact.fullname}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Mobile number:
                  <span className="fw-bold">{contact.mobile}</span>
                </li>
                <li className="list-group-item list-group-item-dark">
                  Email:
                  <span className="fw-bold">{contact.email}</span>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
              <Link to={`/contacts/${contact.id}`} className="btn my-1" style={{ backgroundColor: ORANGE }}>
                <i className="fa fa-eye" />
              </Link>
              <Link to={`/contacts/edit/${contact.id}`} className="btn my-1" style={{ backgroundColor: CYAN }}>
                <i className="fa fa-pencil" />
              </Link>
              <button onClick={confirmDelete} className="btn my-1" style={{ backgroundColor: RED }}>
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
