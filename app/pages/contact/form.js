const Form = () => (
  <form className='flex flex-col items-center justify-center max-w-sm space-y-8 text-center'>
    <div className='my-2'>
      <label className='block text-sm font-bold' for='name'>Name</label>
      <input className='w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500' name='name' type='text' />
    </div>
      <div className='my-2'>
      <label className='block text-sm font-bold' for='email'>Email</label>
      <input className='w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500' name='email' type='email' />
    </div>
    <div className='my-2'>
      <label className='block text-sm font-bold' for='subject'>Subject</label>
      <input className='w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500' name='subject' type='text' />
    </div>
    <div className='my-2'>
      <label className='block text-sm font-bold' for='message'>Message</label>
      <textarea className='w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500' name='name' />
    </div>
  </form>
)

export default Form
