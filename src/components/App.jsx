import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useAuth } from 'hooks';

import { Layout } from './Layout';
import { Home } from '../pages/Home/Home';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { refreshUser } from 'redux/auth/operations';
import { ContactsPage } from 'pages/ContactsPage/ContactsPage';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterForm} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginForm} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={ContactsPage} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
