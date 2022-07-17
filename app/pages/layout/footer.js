import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Footer = ({ logo, socialMedia }) => (
  <footer className="flex flex-col items-center justify-center w-screen px-4 py-2 mt-6 space-y-4">
    <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between md:w-screen md:px-10">
      <Link href="/">
        <a>
          <Image
            src={
              logo
                ? urlFor(logo)
                : 'https://cdn.sanity.io/images/878j5f8u/production/1c96f0af377df2e201794c6085651da6b71812fb-734x792.png'
            }
            alt="Whatsername Logo"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <nav className="flex items-center justify-center text-2xl md:mr-4 md:space-x-2">
        {socialMedia.map(({ url, name, icon }) => (
          <Link key={name} href={url}>
            <a target="_blank" rel="noopener" name={name}>
              <Icon name={icon.name} provider={icon.provider} />
            </a>
          </Link>
        ))}
      </nav>
    </div>
    <small>
      ©{' '}
      <Link href="/">
        <a className="underline">Whatsername</a>
      </Link>{' '}
      {new Date().getFullYear()}, Developed by ©{' '}
      <Link href="https://adaptstudio.co.uk">
        <a className="underline lowercase">adapt</a>
      </Link>
      .
    </small>
  </footer>
);

export default Footer;
