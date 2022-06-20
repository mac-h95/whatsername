import Icon from 'icon';

const Photographer = ({ link, name }) => (
  <a href={link} className="flex items-baseline space-x-2">
    <Icon name="FiCamera" provider="fi" />
    <span>{name}</span>
  </a>
);

export default Photographer;
