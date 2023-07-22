import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PulseLoader } from "react-spinners";

import { fetchContacts } from "redux/operationsApi";
import { selectContacts, selectFilter, selectIsLoading } from "redux/selector"

import { NoContacts } from './NoContacts';
import { ContactsListItem } from './ContactListItem';

import { Container, Info } from './ContactList.styled';
import { useTranslation } from 'react-i18next';


const ContactList = () => {
    const { t } = useTranslation();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const IsLoading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const quantityContacts = contacts.length;

    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    visibleContacts.sort((a, b) => {
        let nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    return (
        <>
            {!IsLoading && quantityContacts ? (
                <NoContacts />
            ) : (
                <>
                    <Info>
                        {t('Quantity yours contacts')}:
                        {IsLoading ? (
                            <span>
                                <PulseLoader color="#8f2c24" size={8} />
                            </span>
                        ) : (
                            quantityContacts
                        )}
                    </Info>

                    <Container>
                        {visibleContacts.map(contact => (
                            <ContactsListItem key={contact.id} {...contact} />
                        ))}
                    </Container>
                </>
            )}
        </>
    );
};
export default ContactList;