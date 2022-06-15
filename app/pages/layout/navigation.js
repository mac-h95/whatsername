import Link from 'next/link';

const Item = ({ href, name, route }) => {
  if (href === '/contact') {
    return (
      <>
        <li className="hover:border-b-2 border-primary-500">
          <Link href="/contact">
            <a className="md:hidden">Contact</a>
          </Link>
        </li>
        <li className="hover:border-b-2 border-primary-500">
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
      className={`hover:border-b-2 border-primary-500 ${
        href === route && 'border-b-2'
      }`}
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

const Navigation = ({ route, visible, setVisible }) => (
  <nav
    className={`absolute top-0 right-0 z-10 w-2/5 h-screen shadow-sm md:static md:h-auto md:shadow-none md:bg-transparent bg-background-800 md:w-auto
  ${visible ? 'w-2/5' : 'w-0'} transition-all duration-500 ease-in-out`}
  >
    <span
      className={`absolute top-0 right-0 mr-3 text-4xl mt-7 md:hidden hover:cursor-pointer ${
        visible ? 'block' : 'hidden'
      }`}
      onClick={() => setVisible(false)}
    >
      &times;
    </span>
    <ul className="flex flex-col px-5 pt-16 space-y-2 text-lg md:space-x-4 md:space-y-0 md:items-center md:flex-row">
      {NavigationItems.map(({ href, name }) => (
        <Item key={href} href={href} name={name} route={route} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
