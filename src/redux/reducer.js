import { contactsReducer } from './contactsReducer';
import { filterReducer } from './filterReducer';
export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
