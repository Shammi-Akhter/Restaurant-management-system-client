import Link from 'next/link';
import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
                <nav>
                    <img src="/images/restaurent-logo.png" alt="" className='w-20 h-20 rounded-full' />
                    <h6 className="footer-title  "><span className='text-amber-400 font-bold'>Hotline:</span> 01612332923</h6>
                    <h1 className='link link-hover' >pureplater@gmail.com</h1>
                    <h1 >H/O: 2nd Floor,Flavour Tower, Plot: 07,Dhaka</h1>
                    <h1 className=" text-lg text-amber-400 font-semibold">PurePlatter</h1>
                    <div className='flex gap-1'>
                        <Link href="https://www.facebook.com/"><FaSquareFacebook className='text-amber-400 text-2xl' /></Link>
                        <Link href="https://www.facebook.com/"><FaInstagramSquare className='text-amber-400 text-2xl' /></Link>
                        <Link href="https://www.facebook.com/"><FaWhatsappSquare className='text-amber-400 text-2xl' /></Link>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title text-yellow-400">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-yellow-400">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h2>Location</h2>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14600.002261209827!2d90.35554733347423!3d23.818578938234285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1761149038254!5m2!1sen!2sbd" width="200" height="150"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </nav>


            </footer>
            <footer className="footer bg-base-200 text-base-content border-t border-base-300 px-10 py-3 flex justify-center items-center text-center">
                <div>
                    <p className="text-lg font-medium text-amber-400">
                        The Garden of Eat'n <br />
                        <span className="text-sm text-black">Providing Delicious Food since 2024 @</span>
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;