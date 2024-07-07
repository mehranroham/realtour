import { LogIn, UserRoundPlus } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const menuItems = [
    { name: 'صفحه اصلی', path: '/' },
    { name: 'پیشنهادات', path: '/offers' },
    { name: 'درباره', path: '/about' },
    { name: 'تماس با ما', path: '/contact' },
  ];

  return (
    <header className='w-full h-[65px] bg-secondary flex items-center'>
      <nav className='grid items-center w-full mx-auto grid-cols-3 justify-between px-20  font-Morabba-Medium max-w-[1500px] '>
        <ul className='flex gap-7 items-center'>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-200 flex items-center gap-2'
                  : 'text-light flex gap-2 items-center hover:text-slate-200 transition-colors duration-300'
              }
              to='/login'
            >
              <LogIn size={29} />
              <span>ورود</span>
            </NavLink>
          </li>
          <span className='h-7 w-0.5 bg-lighter' />
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-slate-200 flex items-center gap-2'
                  : 'text-light flex items-center gap-2 hover:text-slate-200 transition-colors duration-300'
              }
              to='/signup'
            >
              <UserRoundPlus size={26} />
              <span>ثبت نام</span>
            </NavLink>
          </li>
        </ul>
        <ul className='flex gap-7 items-center justify-center'>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 pb-2 border-slate-200 text-slate-200'
                      : 'text-light hover:text-slate-200 transition-colors duration-300'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className=' w-full flex items-center justify-end'>
          <img
            className='w-14 h-14 cursor-pointer'
            src='/logo.png'
            alt='logo'
          />
        </div>
      </nav>
    </header>
  );
}
