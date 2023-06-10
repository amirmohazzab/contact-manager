import axios from 'axios';
//const SERVICE_URL = "https://contactsapi.ahmohazzab.com";
const SERVICE_URL = "http://localhost:9000";

export const getAllContacts = () => {
    const url = `${SERVICE_URL}/contacts`;
    return axios.get(url);
} 

export const getContact = (contactId) => {
    const url = `${SERVICE_URL}/contacts/${contactId}`;
    return axios.get(url);
} 

export const getAllGroups = () => {
    const url = `${SERVICE_URL}/groups`;
    return axios.get(url);
} 

export const getGroup = (groupId) => {
    const url = `${SERVICE_URL}/groups/${groupId}`;
    return axios.get(url);
} 

export const createContact = (contact) => {
    const url = `${SERVICE_URL}/contacts`;
    return axios.post(url, contact);
}

export const updateContact = (contact, contactId) => {
    const url = `${SERVICE_URL}/contacts/${contactId}`;
    return axios.put(url, contact);
}

export const deleteContact = (contactId) => {
    const url = `${SERVICE_URL}/contacts/${contactId}`;
    return axios.delete(url, contactId);
}
