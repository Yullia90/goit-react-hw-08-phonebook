import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';

import { addContact } from '../../../redux/operationsApi';

import { selectContacts } from 'redux/selector';

import { Input, Forms, Button, IoPerson } from './ContactForm.styled';
import { useTranslation } from 'react-i18next';



const { useTransition } = require("react");
const { useDispatch } = require("react-redux");

const initialValues = {
    name: "",
    number: "",
};

const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const { t } = useTransition();
    const dispatch = useDispatch();

    const nameCheck = name => {
        return contacts.filter(contact => contact.name.includes(name));
    };

    const handleSubmit = (value, { resetForm }) => {
        resetForm();
        const check = nameCheck(values.name);

        if (check.length <= 0) {
            dispatch(addContact(value));
            return;
        }
        Report.info("Warning!", `"${values.name}" is already in contacts`, "Okay");
    };
    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Forms>
                <label>
                    {t('Name')}
                    <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    {t('Number')}
                    <Input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>

                <Button type="submit">
                    <IoPerson size={26} />
                </Button>
            </Forms>
        </Formik>
    );
};
export default ContactForm;