import { PortableText } from '@portabletext/react';

const BodyText = ({ value }) => (
  <div className="max-w-[85vw] prose text-foreground-500 md:max-w-prose snap-center">
    <PortableText value={value} />
  </div>
);

export default BodyText;
