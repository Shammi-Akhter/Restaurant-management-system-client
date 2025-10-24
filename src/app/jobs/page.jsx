import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {

    const jobs = [
        {
            id: 1,
            title: "Head Chef",
            restaurant: "Spice Villa Restaurant",
            location: "Banani, Dhaka",
            type: "Full-time",
            salary: "৳45,000 - ৳60,000/month",
            description:
                "Looking for an experienced Head Chef who can manage the kitchen team, design menus, and maintain food quality and hygiene standards.",
        },
        {
            id: 2,
            title: "Waiter / Waitress",
            restaurant: "The Food Garden",
            location: "Dhanmondi, Dhaka",
            type: "Full-time",
            salary: "৳15,000 - ৳20,000/month",
            description:
                "Friendly and professional waiter/waitress required to serve customers, take orders, and ensure excellent dining experience.",
        },
        {
            id: 3,
            title: "Restaurant Manager",
            restaurant: "Urban Bite Café",
            location: "Gulshan, Dhaka",
            type: "Full-time",
            salary: "৳35,000 - ৳50,000/month",
            description:
                "Responsible for supervising daily operations, managing staff, maintaining customer satisfaction, and handling restaurant finances.",
        },
        {
            id: 4,
            title: "Cashier",
            restaurant: "Royal Taste Restaurant",
            location: "Mirpur, Dhaka",
            type: "Part-time",
            salary: "৳12,000/month",
            description:
                "We are seeking a reliable cashier to handle billing, customer payments, and maintain accurate cash records.",
        },
        {
            id: 5,
            title: "Delivery Staff",
            restaurant: "HotBox Express",
            location: "Uttara, Dhaka",
            type: "Full-time",
            salary: "৳18,000/month + tips",
            description:
                "Energetic delivery person needed to deliver orders on time, ensure proper food handling, and maintain friendly communication with customers.",
        },
    ];
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-base-200 py-16 px-6">

                <div className="max-w-6xl mx-auto text-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">
                        Join Our Restaurant Team 🍴
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Explore exciting career opportunities in our restaurant network.
                        From chefs to managers — find the perfect role for you!
                    </p>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
                        >
                            <h2 className="text-2xl font-semibold text-amber-600 mb-1">
                                {job.title}
                            </h2>
                            <p className="font-medium text-gray-800">{job.restaurant}</p>
                            <p className="text-sm text-gray-500 mb-2">{job.location}</p>

                            <div className="flex justify-between items-center mt-3">
                                <span className="px-3 py-1 text-sm bg-amber-100 text-amber-600 rounded-full">
                                    {job.type}
                                </span>
                                <span className="font-semibold text-gray-700">{job.salary}</span>
                            </div>

                            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                                {job.description}
                            </p>

                            <button className="btn bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg mt-6 w-full">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;