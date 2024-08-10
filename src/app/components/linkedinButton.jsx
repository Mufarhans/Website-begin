import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LinkedInButton = () => {
  return (
    <Link href="www.linkedin.com/in/muhammadfarhan05/" passHref>
      <button className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-blue-600">
        <Image
          src="/assets/linkedin.png" 
          alt="LinkedIn"
          width={32}
          height={32}
          objectFit="cover"
        />
      </button>
    </Link>
  );
};

export default LinkedInButton;
