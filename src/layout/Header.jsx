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
      <nav className='flex items-center w-full mx-auto justify-between px-20 text-lighter font-Morabba-Medium max-w-[1500px] '>
        <ul className='flex gap-7 items-center'>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? ' border-lighter flex items-center gap-2'
                  : 'text-light flex gap-2 items-center hover:text-lighter transition-colors duration-300'
              }
              to='/login'
            >
              <LogIn size={28} />
              <span>ورود</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-lighter flex items-center gap-2'
                  : 'text-light flex items-center gap-2 hover:text-lighter transition-colors duration-300'
              }
              to='/signup'
            >
              <UserRoundPlus size={26} />
              <span>ثبت نام</span>
            </NavLink>
          </li>

          <span className='h-7 w-0.5 bg-lighter' />
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 pb-2 border-lighter'
                      : 'text-light hover:text-lighter transition-colors duration-300'
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <img className='w-14 h-14 cursor-pointer' src='/logo.png' alt='logo' />
      </nav>
    </header>
  );
}
