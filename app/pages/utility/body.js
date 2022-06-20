import { PortableText } from '@portabletext/react';

const BodyText = ({ value }) => (
  <div className="max-w-[85vw] prose mx-auto normal-case text-foreground-500 md:max-w-prose snap-center mb-8">
    <PortableText value={value} />
  </div>
);

export default BodyText;
