const Form = () => (
  <form>
    <div className=''>
      <label>Name</label>
      <input name='name' type='text' />
    </div>
      <div className=''>
      <label>Email</label>
      <input name='email' type='email' />
    </div>
    <div className=''>
      <label>Subject</label>
      <input name='subject' type='text' />
    </div>
    <div className=''>
      <label>Message</label>
      <textarea name='name' />
    </div>
  </form>
)

export default Form
