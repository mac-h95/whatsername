import Heading from 'heading';
import { useState } from 'react';

const Contact = () => {
  const [input, setInput] = useState({ name: '', email: '', message: '' });
  // send email on submit
  const handleSubmit = async (e) => {
    const { name, email, message } = input;
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    }).then((res) => res.json());
    console.log(res);
  };
  return (
    <>
      <Heading heading="Contact" />
      <form
        className="flex flex-col max-w-md space-y-6"
        onSubmit={(e) => (e.preventDefault(), handleSubmit(e))}
      >
        <div className="flex items-center space-x-4">
          <div className="flex flex-col space-y-4">
            <label className="text-xl">Name</label>
            <input
              type="text"
              className="input"
              value={input.name}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-xl">Email Address</label>
            <input
              type="text"
              className="input"
              value={input.email}
              onChange={(e) =>
                setInput({
                  ...input,
                  email: e.target.value
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-xl">Message</label>
          <textarea
            className="h-32 resize-none input"
            value={input.message}
            onChange={(e) =>
              setInput({
                ...input,
                message: e.target.value
              })
            }
          />
        </div>
        <button className="w-full px-3 py-2 border-2 border-primary-500 text-background-500 bg-primary-500">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Contact;
