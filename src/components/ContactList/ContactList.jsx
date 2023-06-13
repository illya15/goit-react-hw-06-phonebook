// import css from './ContactList.module.css'

// export const ContactList = ({ onClick, contacts, filter }) => {
//   const filterName = contacts.filter(contact =>
//     contact.name.includes(filter)
//   );
//   return (
//     <ul children={css.list}>
//       {filterName.map(contact => (
//         <li className={css.item} key={contact.id}>
//           <p>
//             {contact.name}: {contact.number}
//           </p>
//           <button className={css.button} type="button" onClick={() => onClick(contact.id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// };
import { useDispatch, useSelector } from 'react-redux';
// import { ListItem, Button, List } from './ContactList.styled';
import css from './ContactList.module.css';
import { deleteContacts } from 'redux/contactsSlice';
export const ContactList = () => {
  const {
    contacts: { contacts },
    filter,
  } = useSelector(state => state);

  const dispatch = useDispatch();
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    // <List>
    <ul children={css.list}>
      {filterName.map(contact => (
        // <ListItem key={contact.id}>
        <li className={css.item} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.button}
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    // {/* </List> */}
  );
};
