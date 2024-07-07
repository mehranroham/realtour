import Button from '../../ui/Button';

export default function OAuth() {
  return (
    <>
      <Button
        className='w-full mt-1 bg-red-600 hover:bg-red-800 hover:text-slate-100 text-slate-200'
        type='submit'
      >
        ادامه با گوگل
      </Button>
    </>
  );
}
