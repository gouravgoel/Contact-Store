import React, { useReducer } from 'react'
import uuid from 'uuid'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from './../types'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-222',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Harry White',
        email: 'harry@gmail.com',
        phone: '222-222-222',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Smith William',
        email: 'smith@gmail.com',
        phone: '222-222-222',
        type: 'personal'
      }
    ],
    current: null,
    filtered: null
  }

  const [state, dispatch] = useReducer(contactReducer, initialState)

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid.v4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }
  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }
  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }

  // Filter Contacts
  const filterContact = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text })
  }

  // Clear FIlter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER })
  }

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContact,
        clearFilter
      }}
    >
      {props.children}
    </contactContext.Provider>
  )
}

export default ContactState