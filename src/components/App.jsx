// import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { useDispatch,useSelector } from 'react-redux';
import {
  changeFilterAction,
  deleteContactAction,
  setContactsAction,
} from 'redux/actions';



export function App() {

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts'));
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

    const { contacts, filter } = useSelector(
      state => (state.contacts)
     
    );
 console.log(contacts);
    console.log(filter);
    const dispatch = useDispatch();
    // useEffect(() => {
    //   localStorage.setItem('contacts', JSON.stringify(contacts));
    // }, [contacts]);


  const addContact = (name, number) => {
    const duplicate = contacts.find(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    if (duplicate) {
      alert('A customer already exists ');
      return;
    }
    dispatch(setContactsAction(contacts, name, number));
    // setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  };

  const changeFilter = e => {

        dispatch(changeFilterAction(e.currentTarget.value));
    // setFilter(e.currentTarget.value);
  };

  const deleteContact = id => {
    const filterId = contacts.filter(contact => contact.id !== id);
    dispatch(deleteContactAction(filterId));
    // setContacts([...filterId]);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <h2>Phonebook</h2>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter onChange={changeFilter} value={filter} />
      <ContactList
        onClick={deleteContact}
        contacts={contacts}
        filter={filter}
      />
    </div>
  );
}
