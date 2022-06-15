import * as Fa from 'react-icons/fa';
import * as Fi from 'react-icons/fi';
import * as Hi from 'react-icons/hi';

export default function Icon({ name, provider }) {
  const iconName = name;

  let Icon;

  switch (provider) {
    case 'fa':
      Icon = Fa[iconName];
      break;
    case 'hi':
      Icon = Hi[iconName];
      break;
    case 'fi':
      Icon = Fi[iconName];
      break;
    default:
      return null;
  }

  return <Icon />;
}
