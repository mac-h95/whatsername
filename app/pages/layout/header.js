import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { urlFor } from 'sanity';
import Navigation from './navigation';

const Header = ({ logo, route }) => {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <header className="flex items-center justify-between w-screen px-6 py-2 mb-3 md:py-6 md:px-10">
      <Link href="/">
        <a className="z-50">
          <Image
            src={urlFor(logo)}
            alt="Whatsername Logo"
            width={90}
            height={90}
          />
        </a>
      </Link>
      <button
        className="z-50 p-0 text-3xl bg-transparent border-0 md:hidden"
        onClick={() => setVisible(!visible)}
        name="menu"
      >
        <Icon name="HiMenuAlt3" provider="hi" />
      </button>
      {width > 768 && <Navigation route={route} setVisible={setVisible} />}
      {width < 768 && (
        <Navigation
          route={route}
          visible={visible}
          setVisible={setVisible}
          nounderline
        />
      )}
    </header>
  );
};

export default Header;
