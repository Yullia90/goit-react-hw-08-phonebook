import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { BtmLogout, Container, LogOut, UserTitle } from './UseMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <Container>
      <UserTitle>Welcome, {user.name}</UserTitle>
      <BtmLogout type="button" onClick={handleLogOut}>
        <LogOut />
      </BtmLogout>
    </Container>
  );
};
