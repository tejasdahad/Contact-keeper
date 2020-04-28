import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { ADD_CONTACT, DELETE_CONTACT,CLEAR_CURRENT,SET_CURRENT, FILTER_CONTACTS,CLEAR_FILTER, UPDATE_CONTACT } from '../types';

const ContactState = props => {
    const initialState = {
         contacts : [
             {
                 id: 1,
                 name: 'Saraf',
                 email: 'saraf@gmail.com',
                 phone: '1234567889',
                 type: 'personal'
             },
             {
                id: 2,
                name: 'Varun',
                email: 'vk@gmail.com',
                phone: '999999999',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Dhoot',
                email: 'dhoot@gmail.com',
                phone: '130803480',
                type: 'personal'
            }
         ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    // Delete contact

    // Update contact

    // Set current

    // Clear current

    // Filter contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;