import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/operations';
import {
  BtnForm,
  Container,
  FormTitle,
  FormsSt,
  Group,
  Input,
  InputBox,
  LinkNav,
} from './RegisterForm.styled';
import { useTranslation } from 'react-i18next';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <FormsSt>
          <FormTitle>{t('Sign Up')}</FormTitle>
          <InputBox>
            <Input type="text" name="name" placeholder={t('Login')} />
          </InputBox>
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
            <BtnForm type="submit">{t('Register')}</BtnForm>
          </InputBox>
          <Group>
            <LinkNav to="/login">{t('Sign In')}</LinkNav>
          </Group>
        </FormsSt>
      </Formik>
    </Container>
  );
};
