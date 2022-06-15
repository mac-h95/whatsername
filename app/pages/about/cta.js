const { default: Link } = require('next/link');

const ActionCall = ({
  heading,
  subheading,
  subheading2,
  buttonText,
  buttonLink
}) => (
  <div className="w-5/6 bg-gradient-to-b from-background-900 to-background-500 snap-center h-[90vh]">
    <div className="flex flex-col space-y-4">
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
      <h3>{subheading2}</h3>
      <Link href={buttonLink.url}>
        <button>{buttonText}</button>
      </Link>
    </div>
  </div>
);

export default ActionCall;
