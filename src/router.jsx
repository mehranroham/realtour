import { createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index';
import Layout from './layout/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPassword from './pages/ForgetPassword';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/forget-password', element: <ForgetPassword /> },
      { path: '/*', element: <Index /> },
    ],
  },
]);
