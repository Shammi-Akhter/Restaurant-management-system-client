'use client';

import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link href="/" >Home</Link></li>
              <li><Link href="#menu" scroll={false} >Menu</Link></li>
              <li><Link href="/contact" target="_blank">Contact</Link></li>
              <li><Link href="/about_us" target="_blank">About Us</Link></li>
            </ul>
          </div>
          <Link href="/" className=" text-xl text-yellow-300"><img src="/images/Restraurant.png" alt="image not found" className="w-52 h-12 rounded" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/"className="font-semibold hover:border-b-2 hover:bg-amber-300">Home</Link></li>
            <li><Link href="/#menu" className="font-semibold hover:border-b-2 hover:bg-amber-300">Menu</Link></li>
            <li><Link href="/contact" target="_blank" className="font-semibold hover:border-b-2 hover:bg-amber-300">Contact</Link></li>
            <li><Link href="/about_us" target="_blank" className="font-semibold hover:border-b-2 hover:bg-amber-300">About Us</Link></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2 ">
          <Link href="/" target="_blank" ><FaCartShopping className="text-2xl text-amber-300" /></Link>
          <Link href="/sign_in" className="btn rounded-xl bg-yellow-300">Sing in</Link>
          <Link href="/" className="btn rounded-xl bg-yellow-300">Log out</Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;