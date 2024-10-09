import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};
