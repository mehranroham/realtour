import { useState } from 'react';
import Button from '../components/ui/Button';
import ContentContainer from '../components/ui/ContentContainer';
import Input from '../components/ui/Input';
import { Link } from 'react-router-dom';
import OAuth from '../components/templates/Login/OAuth';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const formChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <ContentContainer>
      <div className='grid grid-cols-2 min-h-[calc(100vh_-_195px)]'>
        <form
          onSubmit={submitHandler}
          className='flex h-full items-center justify-center flex-col gap-3 px-12'
        >
          <h2 className='text-2xl text-center font-Morabba-Medium mb-3 border-b w-full pb-1.5'>
            فرم ورود
          </h2>
          <Input
            className='font-Poppins-Medium'
            lable='ایمیل'
            id='email'
            placeholder='Email@gmail.com'
            value={formData.email}
            onChange={formChange}
          />
          <Input
            className='font-Poppins-Medium'
            passeye
            lable='رمز'
            id='password'
            placeholder='Password'
            value={formData.password}
            onChange={formChange}
          />

          <div className='flex justify-between items-center w-full mt-5'>
            <Link to='/forget-password' className='text-red-500'>
              فراموشی رمز عبور
            </Link>
            <p>
              حساب کاربری ندارید؟
              <span> </span>
              <Link className=' text-lighter ' to='/signup'>
                ساخت اکانت
              </Link>
            </p>
          </div>
          <Button className='w-full mt-1' type='submit'>
            ورود به سایت
          </Button>
          <p className='w-full before:border-t before:flex-1 flex items-center gap-3 after:border-t after:flex-1 my-1'>
            یا
          </p>
          <OAuth />
        </form>
        <div className='flex items-center justify-center'>
          <img
            src='/login.avif'
            alt='ورود'
            className='rounded-lg object-cover h-[85%] w-[80%]'
          />
        </div>
      </div>
    </ContentContainer>
  );
}
