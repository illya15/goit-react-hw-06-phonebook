import { createReducer } from '@reduxjs/toolkit';
import { stateContacts } from './stateContacts';

import { setContactsAction } from './actions';
export const contactsReducer = createReducer(stateContacts, {
  [setContactsAction]: (state, action) => {
    return { ...state, contacts: action.payload };
  },
});
