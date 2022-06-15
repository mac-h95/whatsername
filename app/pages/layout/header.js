import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { urlFor } from 'sanity';
import Navigation from './navigation';

const Header = ({ logo, route }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header className="flex items-center justify-between w-screen px-4 py-2 md:px-10">
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
      <a className="text-3xl md:hidden" onClick={() => setVisible(!visible)}>
        <Icon name="HiMenuAlt3" provider="hi" />
      </a>
      <Navigation route={route} visible={visible} setVisible={setVisible} />
    </header>
  );
};

export default Header;
