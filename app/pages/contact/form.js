import { useState } from 'react';
import LoadingSpinner from 'pages/utility/spinner';
import Icon from 'icon';

const Form = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [mailSent, setMailSent] = useState('unsent');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setMailSent('loading');

    await fetch('/api/contact-submit', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formInput
      })
    }).then((res) => {

      res.status === 200
        ? (setMailSent('sent'),
          setFormInput({ name: '', email: '', subject: '', message: '' }))
        : (setMailSent('error'), setError(res.statusText));
    });
  };

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
          required
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
          required
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
          required
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
          required
          onChange={(e) =>
            setFormInput({ ...formInput, message: e.target.value })
          }
        />
      </div>
      <button
        className={`
        text-background-500
        ${
          mailSent === 'unsent'
            ? 'bg-primary-500 border-primary-500 active:bg-primary-500 active:border-primary-500'
            : ''
        }
        ${
          mailSent === 'sent'
            ? 'bg-green-400 border-green-400 active:bg-green-400 active:border-green-400'
            : ''
        }
        ${
          mailSent === 'error'
            ? 'bg-red-400 border-red-400 active:bg-red-400 active:border-red-400'
            : ''
        }
        ${
          mailSent === 'sending'
            ? 'bg-primary-200 border-primary-200 text-background-200'
            : ''
        }
        `}
        type="submit"
      >
        <span className="flex items-center space-x-2">
          {mailSent === 'loading' && <>Sending</>}
          {mailSent === 'sent' && (
            <span className="text-xl">
              <Icon name="FiCheckCircle" provider="fi" />
            </span>
          )}
          {mailSent === 'error' && (
            <span className="text-xl">
              <Icon name="FiXCircle" provider="fi" />
            </span>
          )}
          {mailSent === 'unsent' && 'Send'}
        </span>
      </button>
      {mailSent === 'error' && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
};

export default Form;
