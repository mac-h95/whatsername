import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Footer = ({ logo, socialMedia }) => (
  <footer className="flex flex-col items-center justify-center w-screen px-4 py-2">
    <div className="flex flex-col items-center justify-center md:">
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
      <nav className="flex items-center justify-center text-2xl">
        {socialMedia.map(({ url, name, icon }) => (
          <a href={url} key={name} target="_blank" rel="noopener">
            <Icon name={icon.name} provider={icon.provider} />
          </a>
        ))}
      </nav>
    </div>
    <span></span>
  </footer>
);

export default Footer;
