import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import Navbar from "@/components/Navbar";

const page = () => {
    return (
        <div>
            <Navbar />
                <div className="container mx-auto my-5 p-5 grid grid-cols-2 gap-20 items-center">
                    <div>
                        <img src="/images/chicken.jpg" className="rounded-2xl w-full h-auto object-cover" />
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <h6 className="font-semibold">Sign in with</h6>
                            <div className="flex gap-3">
                                <button className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-md hover:cursor-pointer">
                                    <FaFacebook className="text-white text-sm" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center shadow-md hover:cursor-pointe">
                                    <AiFillGoogleCircle className="text-white text-lg" />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 my-5">
                            <div className="flex-1 border-t border-gray-300" />
                            <p className="text-sm text-gray-500">Or</p>
                            <div className="flex-1 border-t border-gray-300" />
                        </div>

                        <div className="max-w-md">
                            <input type="email" placeholder="Email address" className="rounded border border-amber-200 w-[580px] p-3 my-2 placeholder-gray-400" />
                            <input type="password" placeholder="Password" className="rounded border border-amber-200 w-[580px] p-3 my-2 placeholder-gray-400" />

                            <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                                <label className="flex items-center gap-2 hover:cursor-pointer ">
                                    <input type="checkbox" className="w-4 h-4 hover:cursor-pointer"  />
                                    <span >Remember me</span>
                                </label>

                                <button className="text-sm text-amber-500 hover:underline hover:cursor-pointer">
                                    Forgot password?
                                </button>
                            </div>


                            <button className="mt-6 bg-amber-400 hover:bg-amber-500 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:cursor-pointer">
                                LOGIN
                            </button>


                            <p className="mt-4 text-sm text-gray-700">
                                Don't have an account?
                                <a href="/signup" className="text-amber-400 ml-2 hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
        
        </div>
    );
};

export default page;
