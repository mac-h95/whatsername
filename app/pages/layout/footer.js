import Icon from 'icon';
import Image from 'next/image';
import { urlFor } from 'sanity';

const Footer = ({ logo, socialMedia }) => (
  <footer className="flex items-center justify-center w-screen px-4 py-2 flex-column">
    <Image src={urlFor(logo)} alt="Whatsername Logo" width={200} height={200} />
    <nav className="flex flex-col items-center justify-center">
      {socialMedia.map(({ url, name, icon }) => (
        <a href={url} key={name} target="_blank" rel="noopener">
          <Icon name={icon.name} provider={icon.provider} />
        </a>
      ))}
    </nav>
  </footer>
);

export default Footer;
