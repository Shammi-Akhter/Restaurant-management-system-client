import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-base-200 flex items-center justify-center py-16 px-6">
                <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-amber-500 mb-4 text-center">
                        Cookie Policy
                    </h1>
                    <p className="text-gray-700 mb-4">
                        This Cookie Policy explains how our Restaurant Management System uses cookies
                        and similar technologies to improve your browsing experience and ensure
                        smooth website functionality.
                    </p>

                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            Cookies are small text files stored on your device to help us remember your preferences
                            and improve your experience.
                        </li>
                        <li>
                            We use cookies to keep you logged in, save cart or order data, and understand how users
                            interact with our site.
                        </li>
                        <li>
                            Some cookies are essential for the website to function properly, while others help us
                            analyze usage and improve our services.
                        </li>
                        <li>
                            You can choose to disable cookies in your browser settings, but some features
                            of the site may not work as intended.
                        </li>
                        <li>
                            By continuing to use our website, you agree to our use of cookies as described in this policy.
                        </li>
                    </ul>

                    <p className="mt-6 text-gray-700">
                        If you have questions about our Cookie Policy, please contact our support team.
                    </p>

                    <p className="mt-4 text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} <span className='text-amber-400 font-bold'>PurePlatter</span>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page;