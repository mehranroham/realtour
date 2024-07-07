import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <main className='bg-primary min-h-screen w-full text-lighter py-[40px]'>
        <Outlet />
      </main>
    </>
  );
}
