import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactOps";

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.container}>
      <div className={css.containerContact}>
        <p className={css.contact}>{name}</p>
        <p className={css.contact}>{number}</p>
      </div>
      <button className={css.contactDeleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
