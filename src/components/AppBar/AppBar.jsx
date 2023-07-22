import { useAuth } from 'hooks';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UseMenu/UseMenu';

import { Header, HeaderTitle } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Header>
      <Navigation />
      <HeaderTitle>PhoneBook</HeaderTitle>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
