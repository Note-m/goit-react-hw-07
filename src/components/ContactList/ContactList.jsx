import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { selectFilter } from "../../redux/filtersSlice";
import { selectAllContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filterValue = useSelector(selectFilter);

  // Фільтруємо контакти за іменем з використанням введеного значення
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.contactWrapper}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
