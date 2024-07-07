export default function Button({
  children,
  className,
  type = 'button',
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      className={`px-5 py-2 text-slate-900 rounded-md font-Morabba-Medium bg-light hover:bg-secondary hover:text-lighter transition-colors duration-500 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}
