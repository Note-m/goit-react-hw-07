import css from "./ContactForm.module.css";
// import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/contactOps";
import { useDispatch } from "react-redux";

//validating schema for name and number
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Limit 50 symbols")
    .required("This field is required"),
  number: Yup.string()
    .min(7, "Too short")
    .max(20, "Limit 20 symbols")
    .required("This field is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.inputWrapper}>
        <Field as="label" htmlFor="nameId" className={css.label}>
          Name
        </Field>
        <Field
          type="text"
          className={css.input}
          name="name"
          id="nameId"
        ></Field>
        <ErrorMessage name="name" />
        <Field as="label" htmlFor="numberId" className={css.label}>
          Number
        </Field>
        <Field
          type="text"
          className={css.input}
          name="number"
          id="numberId"
        ></Field>
        <ErrorMessage name="number" />
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
