import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold text-3xl" href="/">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
