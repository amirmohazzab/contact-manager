import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {PINK, CURRENTLINE, ORANGE} from "../../helpers/colors";
import Contact from './Contact'
import Spinner from "../Spinner";
import { ContactContext } from '../../context/contactContext';

const Contacts = () => {

    const {loading, filteredContacts, deleteContact} = useContext(ContactContext);
  return (
    <> 
    <section className='container'> 
        <div className='grid'>
            <div className='row'>
                <div className='col'>
                    <p className='h3 float-start'>
                        <Link to={"/contacts/add"} className='btn m-2' style={{backgroundColor: PINK}}>
                            Create new contact
                            <i className='fa fa-plus-circle mx-2'/>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </section>
    {
        loading ? <Spinner/> : 
        (
            <section className='container'>
                <div className='row'> 
                {
                    filteredContacts.length > 0 ? filteredContacts.map(c => ( <Contact 
                        key={c.id} 
                        deleteContact={() => deleteContact(c.id, c.fullname)}
                        contact={c}
                        />)) :
                    (
                        <div className='text-center py-5' style={{backgroundColor: CURRENTLINE}}>
                            <p className='h3' style={{color: ORANGE}}>
                                Contact not found ...
                            </p>
                            <img src={require("../../assets/no-found.gif")} alt="Not found" className='w-25'/>
                        </div>
                    )
                }
                </div>
            </section>
        )
    }
   
    </>
  )
}

export default Contacts





