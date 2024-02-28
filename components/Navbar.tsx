import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="text-white flex justify-center items-center py-4 sticky w-full z-20 top-0 start-0 bg-black text-2xl">
      {/* New usage of Link without <a> tag child */}
      <Link href="/">
        {/* The text is now a child of Link directly */}
        &gt;sudo encrypt_
      </Link>
    </nav>
  );
};

export default NavBar;
