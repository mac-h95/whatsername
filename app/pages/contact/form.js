import { useState } from 'react'

const Form = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('/api/contact-submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formInput
      })
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <form
      className="flex flex-col items-center justify-center max-w-sm space-y-8 text-center"
      onSubmit={handleSubmit}
    >
      <div className="my-2">
        <label className="block text-sm font-bold" htmlFor="name">
          Name
        </label>
        <input
          className="w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500"
          name="name"
          type="text"
          onChange={(e) => setFormInput({ ...formInput, name: e.target.value })}
        />
      </div>
      <div className="my-2">
        <label className="block text-sm font-bold" htmlFor="email">
          Email
        </label>
        <input
          className="w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500"
          name="email"
          type="email"
          onChange={(e) =>
            setFormInput({ ...formInput, email: e.target.value })
          }
        />
      </div>
      <div className="my-2">
        <label className="block text-sm font-bold" htmlFor="subject">
          Subject
        </label>
        <input
          className="w-4/5 bg-transparent border-0 border-b-2 focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500"
          name="subject"
          type="text"
          onChange={(e) =>
            setFormInput({ ...formInput, subject: e.target.value })
          }
        />
      </div>
      <div className="my-2">
        <label className="block text-sm font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          rows="3"
          className="bg-transparent border-0 border-b-2 resize-none focus:ring-0 focus:border-primary-500 focus:outline-0 border-foreground-500"
          name="name"
          onChange={(e) =>
            setFormInput({ ...formInput, message: e.target.value })
          }
        />
      </div>
      <input className="button primary" type="submit" value="Send" />
    </form>
  )
}

export default Form
