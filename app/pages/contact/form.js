const Form = () => (
  <form className='flex flex-col items-center justify-center max-w-sm space-y-8 text-center'>
    <div className='my-2'>
      <label className='block text-sm font-bold' for='name'>Name</label>
      <input name='name' type='text' />
    </div>
      <div className='my-2'>
      <label className='block text-sm font-bold' for='email'>Email</label>
      <input name='email' type='email' />
    </div>
    <div className='my-2'>
      <label className='block text-sm font-bold' for='subject'>Subject</label>
      <input name='subject' type='text' />
    </div>
    <div className='my-2'>
      <label className='block text-sm font-bold' for='message'>Message</label>
      <textarea name='name' />
    </div>
  </form>
)

export default Form
