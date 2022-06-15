const { default: Link } = require('next/link');

const ActionCall = ({
  heading,
  subheading,
  subheading2,
  buttonText,
  buttonLink
}) => (
  <div className="w-5/6 py-16 bg-gradient-to-b from-background-900 to-background-500 snap-center md:pt-36">
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      <h2 className="text-4xl md:text-6xl font-bold  text-primary-500 tracking-[.4rem];">
        {heading}
      </h2>
      <div className="space-y-4">
        <h3 className="text-2xl font-bold md:text-4xl">{subheading}</h3>
        <h3 className="text-2xl font-bold md:text-4xl">{subheading2}</h3>
      </div>
      <Link href={buttonLink.url}>
        <button>{buttonText}</button>
      </Link>
    </div>
  </div>
);

export default ActionCall;
