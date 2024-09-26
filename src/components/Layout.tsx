import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <p>EN HEADER, lägg in tag här</p>
      <Outlet></Outlet>
      <p>FOOTER, lägg in tag här</p>
    </>
  );
};
