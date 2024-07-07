import { EyeIcon, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function Input({
  lable = false,
  placeholder,
  className,
  id,
  passeye = false,
  ...props
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className='relative flex flex-col gap-2 w-full'>
      {lable && <label htmlFor={id}>{lable}</label>}
      <input
        dir='ltr'
        id={id}
        required
        className={`outline-none rounded-md px-2 py-1.5 placeholder:text-slate-500 placeholder:font-Poppins-Regular text-slate-950 ${className}`}
        placeholder={placeholder}
        type={showPass ? 'text' : id}
        {...props}
      />
      {passeye && !showPass && (
        <EyeIcon
          size={23}
          onClick={() => setShowPass((prev) => !prev)}
          className='absolute right-2 bottom-1.5 cursor-pointer text-slate-500'
        />
      )}
      {passeye && showPass && (
        <EyeOff
          size={23}
          onClick={() => setShowPass((prev) => !prev)}
          className='absolute right-2 bottom-1.5 cursor-pointer text-slate-500'
        />
      )}
    </div>
  );
}
