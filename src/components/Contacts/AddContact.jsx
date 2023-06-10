import { Link } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {contactSchema} from '../../validations/contactValidation';
import { useContext } from "react";
import { ContactContext } from "../../context/contactContext";

import { Spinner } from "../";
import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const AddContact = () => {

  const {loading, groups, createContact} = useContext(ContactContext);
  
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <section className="p-3">
            <img
              className="img-fluid "
              src={require("../../assets/man-taking-note.png")}
              height="400px"
              style={{
                position: "absolute",
                zIndex: "-1",
                top: "130px",
                right: "100px",
                opacity: "50%",
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: GREEN }}
                  >
                    Create new contact
                  </p>
                </div>
              </div>
              <hr style={{ backgroundColor: GREEN }} />
              <div className="row mt-5">
                <div className="col-xl-4 col-lg-6 col-md-8 col-sm-12">
                  <Formik 
                  initialValues = {{
                    fullname: "",
                    photo: "",
                    mobile: "",
                    email: "",
                    job: "",
                    group: ""
                  }}
                  validationSchema = {contactSchema}
                  onSubmit = {(values) => {
                    createContact(values);
                  }}
                  >
                        <Form>
                        <div className="mb-2">
                          <Field
                            name="fullname"
                            type="text"
                            className="form-control"
                            placeholder="fullname"
                          />
                          <ErrorMessage name="fullname" render={msg => <div className="text-danger">{msg}</div>} />
                        </div>
                        <div className="mb-2">
                          <Field
                            name="photo"
                            type="text"
                            className="form-control"
                            placeholder="photoUrl"
                          />
                          <ErrorMessage name="photo" render={msg => <div className="text-danger">{msg}</div>} />
                        </div>
                        <div className="mb-2">
                          <Field
                            name="mobile"
                            type="number"
                            className="form-control"
                            placeholder="Mobile number"
                          />
                          <ErrorMessage name="mobile" render={msg => <div className="text-danger">{msg}</div>} /> 
                        </div>
                        <div className="mb-2">
                          <Field
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                          />
                          <ErrorMessage name="email" render={msg => <div className="text-danger">{msg}</div>} />
                        </div>
                        <div className="mb-2">
                          <Field
                            name="job"
                            type="text"
                            className="form-control"
                            placeholder="Job"
                          />
                         <ErrorMessage name="job" render={msg => <div className="text-danger">{msg}</div>} />
                        </div>
                        <div className="mb-2">
                          <Field
                            name="group"
                            as="select"
                            className="form-control"
                          >
                            <option value=""> Select group </option>
                            {groups.length > 0 &&
                              groups.map((group) => (
                                <option key={group.id} value={group.id}>
                                  {group.name}
                                </option>
                              ))}
                          </Field>
                          <ErrorMessage name="group" render={msg => <div className="text-danger">{msg}</div>} />
                        </div>
                        <div className="mx-2">
                          <input
                            type="submit"
                            className="btn"
                            style={{ backgroundColor: PURPLE }}
                            value="Create contact"
                          />
                          <Link
                            to={"/contacts"}
                            className="btn mx-2"
                            style={{ backgroundColor: COMMENT }}
                          >
                            Cancel
                          </Link>
                        </div>
                      </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AddContact;