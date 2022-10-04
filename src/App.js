import { useState, useEffect } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import {COMMENT, CURRENTLINE, PURPLE, YELLOW, FOREGROUND} from "./helpers/colors";
import {
  AddContact,
  Contacts,
  ViewContact,
  Navbar,
  EditContact,
} from "./components";
import {
  getAllContacts,
  getAllGroups,
  createContact,
  deleteContact
} from "./services/contactService";
import {confirmAlert} from 'react-confirm-alert';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [groups, setGroups] = useState([]);
  const [contact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });

  const [query, setQuery] = useState({text: ""});
  const [filteredContacts, setFilteredContacts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data: contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();

        setContacts(contactsData);
        setFilteredContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const createContactForm = async (event) => {
    event.preventDefault();
    try {
      const { status } = await createContact(contact);
      if (status === 201) {
        setContact({});
        navigate("/contacts");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const setContactInfo = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };


  const confirm = (contactId, contactFullname) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            style={{
              backgroundColor: CURRENTLINE,
              border: `1px solid ${PURPLE}`,
              borderRadius: "1em",
            }}
            className="p-4"
          >
            <h1 style={{ color: YELLOW }}> Remove contact </h1>
            <p style={{ color: FOREGROUND }}>
              ? Are you sure to delete {contactFullname} 
            </p>
            <button
              onClick={() => {
                removeContact(contactId);
                onClose();
              }}
              className="btn mx-2"
              style={{ backgroundColor: PURPLE }}
            >
              I am sure
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: COMMENT }}
            >
              Cancel
            </button>
          </div>
        );
      },
    });
  };


  const removeContact = async (contactId) => {
    try{
      setLoading(true);
      const response = await deleteContact(contactId);
      if(response){
        const {data: contactsData} = await getAllContacts();
        setContacts(contactsData);
        setLoading(false);
      }
    }catch (err) {
      console.log(err.message);
      setLoading(false);
    }   
  }

  const contactSearch = (event) => {
    setQuery({ ...query, text: event.target.value });
    const allContacts = contacts.filter((contact) => {
      return contact.fullname
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setFilteredContacts(allContacts);
  };

  return (
    <div className="App">
      <Navbar query={query} search={contactSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route
          path="contacts"
          element={<Contacts contacts={filteredContacts} loading={loading} confirmDelete={confirm} />}
        />
        <Route
          path="/contacts/add"
          element={
            <AddContact
              loading={loading}
              setContactInfo={setContactInfo}
              contact={contact}
              groups={groups}
              createContactForm={createContactForm}
            />
          }
        />
        <Route path="/contacts/:contactId" element={<ViewContact />} />
        <Route
          path="/contacts/edit/:contactId"
          element={
            <EditContact />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
