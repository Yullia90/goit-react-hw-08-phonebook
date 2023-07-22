import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Background } from './Background/Background';
import { Container } from './Layout.styled';
import { BtnLocales } from './BtnLocales/BtnLocales';
export const Layout = () => {
  return (
    <>
      <Background />
      <AppBar />
      <BtnLocales />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
