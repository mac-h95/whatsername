import Link from 'next/link';
import { onClickOutside } from 'pages/utility/click';
import { useRef } from 'react';

const Item = ({ href, name, route, nounderline, setVisible }) => {
  if (href === '/contact') {
    return (
      <>
        <li
          className="hover:border-b-2 border-primary-500"
          onClick={() => setVisible(false)}
        >
          <Link href="/contact">
            <a className="md:hidden">Contact</a>
          </Link>
        </li>
        <li
          className="hover:border-b-2 border-primary-500"
          onClick={() => setVisible(false)}
        >
          <Link href="/contact">
            <button className="hidden md:inline-block" href="/contact">
              Contact
            </button>
          </Link>
        </li>
      </>
    );
  }

  return (
    <li
      onClick={() => setVisible(false)}
      className={`hover:md:border-b-2 border-primary-500
        ${route.includes(href) && !nounderline && `border-b-2`}
        ${route.includes(href) && nounderline && `text-primary-500`}
      `}
    >
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </li>
  );
};

const NavigationItems = [
  { href: '/about', name: 'About' },
  { href: '/events', name: 'Events' },
  { href: '/blog', name: 'Blog' },
  { href: '/media', name: 'Media' },
  { href: '/shop', name: 'Shop' },
  { href: '/contact', name: 'Contact' }
];

const Navigation = ({ route, visible, setVisible, nounderline }) => {
  const navRef = useRef();
  onClickOutside(navRef, () => setVisible(false));
  return (
    <nav
      ref={navRef}
      className={`fixed top-0 right-0 z-50 w-2/5 h-screen shadow-sm  md:h-auto md:flex md:static items-start md:shadow-none md:bg-transparent bg-background-800 md:w-auto transition-all duration-500 ease-in-out
        ${
          visible
            ? 'translate-x-0'
            : `${nounderline ? 'translate-x-[100%]' : 'translate-x-0'}`
        }
      `}
    >
      <span
        className={`absolute top-0 right-0 mr-3 text-4xl mt-7 md:hidden hover:cursor-pointer ${
          visible ? 'block' : 'hidden'
        }`}
        onClick={() => setVisible(false)}
      >
        &times;
      </span>
      <ul className="flex flex-col px-5 pt-16 space-y-2 text-lg md:pt-0 md:space-x-4 md:space-y-0 md:items-center md:flex-row">
        {NavigationItems.map(({ href, name }) => (
          <Item
            key={href}
            href={href}
            name={name}
            route={route}
            nounderline={nounderline}
            setVisible={setVisible}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
