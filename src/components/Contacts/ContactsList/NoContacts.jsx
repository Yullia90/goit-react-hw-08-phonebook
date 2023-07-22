import { useTranslation } from 'react-i18next';
import { Text } from './NoContacts.styled';

export const NoContacts = () => {
  const { t } = useTranslation();
  return <Text>{t('You dont have any contacts')}</Text>;
};
