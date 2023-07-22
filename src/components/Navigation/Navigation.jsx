import { useAuth } from 'hooks';
import { LinkNav } from './Navigation.styled';
import { useTranslation } from 'react-i18next';

export const Navigation = () => {
  const { t } = useTranslation();
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <LinkNav to="/">{t('Info')}</LinkNav>
      {isLoggedIn && <LinkNav to="/contacts">{t('Contacts')}</LinkNav>}
    </nav>
  );
};
