import Icon from 'icon';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { urlFor } from 'sanity';
import Navigation from './navigation';

const Header = ({ logo, route }) => {
<<<<<<< HEAD
  const [visible, setVisible] = useState(false);
=======
  const [visibile, setVisible] = useState(false);
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
>>>>>>> parent of 4b9fe77 (sliding animation for menu done)

  return (
    <header className="flex items-center justify-between w-screen px-10 py-2">
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
      <a className="text-3xl md:hidden" onClick={() => setVisible(!visibile)}>
        <Icon name="HiMenuAlt3" provider="hi" />
      </a>
      {width > 768 && <Navigation route={route} setVisible={setVisible} />}
      {width < 768 && visibile && (
        <Navigation route={route} setVisible={setVisible} />
      )}
    </header>
  );
};

export default Header;
