import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='bg-primary min-h-[calc(100vh_-_65px)] w-full text-lighter py-[40px]'>
        <Outlet />
      </main>
    </>
  );
}
