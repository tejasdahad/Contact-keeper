import React, { useReducer } from 'react';
import ContactContext from './contactContext';
import {v4 as uuid} from 'uuid';
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
         ],
         current: null,
         filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = contact => {
        contact.id = uuid();
        dispatch({type:ADD_CONTACT,payload: contact});
    }
    // Delete contact
    const deleteContact = id => {
        dispatch({type:DELETE_CONTACT,payload: id});
    }
    // Update contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact});
    }

    // Set current
    const setCurrent = contact => {
        dispatch({type: SET_CURRENT, payload: contact});
    }
    // Clear current
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    }
    // Filter contacts
    const filterContacts = text => {
        dispatch({type:FILTER_CONTACTS, payload: text});
    }

    // Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER});
    }

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact,
                filterContacts,
                clearFilter
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
}

export default ContactState;