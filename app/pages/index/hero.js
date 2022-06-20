import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'sanity';

const Hero = ({ heading, image }) => (
  <>
    <div className="z-10 flex flex-col justify-start space-y-8 pb-52">
      <h1>{heading}</h1>
      <Link href="/about">
        <button className="mx-auto primary hero">Find Out More</button>
      </Link>
    </div>
    <Image
      src={urlFor(image)}
      alt={heading}
      layout="fill"
      objectFit="cover"
      style={{ opacity: 0.2, zIndex: 0 }}
    />
  </>
);

export default Hero;
