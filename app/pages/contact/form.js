const Form = () => (
  <form>
    <div className='my-2'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='name'>Name</label>
      <input name='name' type='text' />
    </div>
      <div className='my-2'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='email'>Email</label>
      <input name='email' type='email' />
    </div>
    <div className='my-2'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='subject'>Subject</label>
      <input name='subject' type='text' />
    </div>
    <div className='my-2'>
      <label className='block text-gray-700 text-sm font-bold mb-2' for='message'>Message</label>
      <textarea name='name' />
    </div>
  </form>
)

export default Form
