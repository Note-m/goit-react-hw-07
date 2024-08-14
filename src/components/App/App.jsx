import { useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/filter/contactOps";
import { loading, error } from "../../redux/contacts/contactsSelectors";

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(loading);
  const isError = useSelector(error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isError && <p>Error please reload page... </p>}
      {isLoading && <p>Loading... </p>}
      <ContactList />
    </div>
  );
};
export default App;
