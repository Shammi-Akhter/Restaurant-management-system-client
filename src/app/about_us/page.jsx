import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center py-16 px-6">
                <div className="max-w-5xl text-center">
                  
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-600 mb-10">
                        Welcome to <span className="font-semibold text-black">Our Website</span> —
                        where creativity meets technology! We are a passionate team of developers and designers
                        dedicated to building user-friendly, responsive, and modern web applications.
                    </p>

                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                        <h2 className="text-2xl font-semibold text-amber-500 mb-3">
                            Our Mission
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission is to make technology accessible and enjoyable for everyone.
                            We focus on crafting web solutions that not only look good but also deliver
                            seamless performance. Every line of code we write is aimed at making users’ lives easier.
                        </p>
                    </div>

                    
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
                        <h2 className="text-2xl font-semibold text-amber-500 mb-3">
                            Our Vision
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We envision a world where every idea can come to life through clean design
                            and powerful development. Our goal is to empower learners, businesses,
                            and creators to express themselves digitally with confidence.
                        </p>
                    </div>

               
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-amber-500 mb-6">Our Team</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="p-4 rounded-xl shadow-md hover:shadow-xl transition">
                                <img
                                    src="/images/Shammi.jpg"
                                    alt="Team Member"
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-lg">Shammi Akther</h3>
                                <p className="text-sm text-gray-500">Frontend Developer</p>
                            </div>
                            <div className="p-4 rounded-xl shadow-md hover:shadow-xl transition">
                                <img
                                    src="/images/Faizul.jpg"
                                    alt="Team Member"
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-lg">Faizul Hassan</h3>
                                <p className="text-sm text-gray-500">Backend Developer</p>
                            </div>
                            <div className="p-4 rounded-xl shadow-md hover:shadow-xl transition">
                                <img
                                    src="/images/mehedi.jpg"
                                    alt="Team Member"
                                    className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-lg">Mehedi Hasan</h3>
                                <p className="text-sm text-gray-500">UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;