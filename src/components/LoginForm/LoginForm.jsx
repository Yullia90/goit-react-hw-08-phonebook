import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  BtnForm,
  Container,
  FormTitle,
  FormsSt,
  Group,
  Input,
  InputBox,
  LinkNav,
} from './LoginForm.styled';
import { useTranslation } from 'react-i18next';

const initialValues = {
  email: '',
  password: '',
};
export const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
    };
    
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormsSt>
          <FormTitle>{t('Sign In')}</FormTitle>
          <InputBox>
            <Input type="email" name="email" placeholder={t('Email')} />
          </InputBox>
          <InputBox>
            <Input
              type="password"
              name="password"
              placeholder={t('Password')}
            />
          </InputBox>
          <InputBox>
            <BtnForm type="submit">{t('Log In')}</BtnForm>
          </InputBox>
          <Group>
            <LinkNav to="/register">{t('Register')}</LinkNav>
          </Group>
        </FormsSt>
      </Formik>
    </Container>
  );
};