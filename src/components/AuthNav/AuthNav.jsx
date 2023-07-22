import { useTranslation } from 'react-i18next';
import { LinkNav } from './AuthNav.styled';

export const AuthNav = () => {
  const { t } = useTranslation();
  return (
    <div>
      <LinkNav to="/register">{t('Register')}</LinkNav>
      <LinkNav to="/login">{t('Log In')}</LinkNav>
    </div>
  );
};
