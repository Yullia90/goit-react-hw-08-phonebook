import ContactForm from 'components/Contacts/ContactForm/ContactForm';
import { Container, TitleContacts } from './ContactsPage.styled';

import Filter from 'components/Filter/Filter';
import ContactsList from "components/Contacts/ContactsList/ContactList"
import { useTranslation } from 'react-i18next';

export const ContactsPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <ContactForm />
      <TitleContacts>{t('Contacts')}</TitleContacts>

      <Filter />
      <ContactsList />
    </Container>
  );
};
