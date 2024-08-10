import Link from 'next/link';
import React from 'react';

const Button = (props) => {
  return (
    <Link href={`/${props.title}`}>
      <button className="bg-slate-800 mx-5 p-7 rounded-md text-white">
        {props.title}
      </button>
    </Link>
  );
};

export default Button;
