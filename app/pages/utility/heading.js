const Heading = ({ heading, subheading }) => (
  <div className="mb-6">
    <h1>{heading}</h1>
    {subheading && <h2>{subheading}</h2>}
  </div>
);

export default Heading;
