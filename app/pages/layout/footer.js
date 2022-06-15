import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Footer = ({ logo, socialMedia }) => (
  <footer className="flex flex-col items-center justify-center w-screen px-4 py-2 space-y-4">
    <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between md:w-screen md:px-10">
      <Link href="/">
        <a>
          <Image
            src={urlFor(logo)}
            alt="Whatsername Logo"
            width={90}
            height={90}
          />
        </a>
      </Link>
      <nav className="flex items-center justify-center mr-4 text-2xl md:space-x-2">
        {socialMedia.map(({ url, name, icon }) => (
          <a href={url} key={name} target="_blank" rel="noopener">
            <Icon name={icon.name} provider={icon.provider} />
          </a>
        ))}
      </nav>
    </div>
    <small>
      ©{' '}
      <Link href="/">
        <a className="underline">Whatsername</a>
      </Link>{' '}
      {new Date().getFullYear()}, Developed by ©
      <Link href="https://adaptstudio.co.uk">
        <a className="underline">adapt</a>
      </Link>
      .
    </small>
  </footer>
);

export default Footer;
