import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className='bg-primary min-h-[calc(100vh_-_115px)] w-full py-[40px] font-Dana-Regular text-slate-300 border-slate-300'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
