import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <div className=" bg-base-200 flex items-center justify-center py-10 px-6">
                <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
                    <h1 className="text-3xl font-bold text-amber-500 mb-4 text-center">
                        Terms of Use
                    </h1>
                    <p className="text-gray-700 mb-4">
                        Welcome to our Restaurant Management System. By accessing or using our website,
                        you agree to follow these Terms of Use. Please read them carefully before using our services.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>
                            All menu information, prices, and availability are subject to change without notice.
                        </li>
                        <li>
                            Users must provide accurate information when placing reservations or job applications.
                        </li>
                        <li>
                            Any misuse of the system, such as fake bookings or data tampering, is strictly prohibited.
                        </li>
                        <li>
                            We are not responsible for any technical issues or service interruptions.
                        </li>
                        <li>
                            By using this website, you agree to our privacy and data protection policies.
                        </li>
                    </ul>
                    <p className="mt-6 text-gray-700">
                        If you have any questions about these terms, please contact our support team.
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