import { useState } from 'react';
import axios from 'axios';
import { ArrowRight } from 'lucide-react';
import SuccessPopup from "../components/SuccessPopup.jsx";
import ErrorPopup from "../components/ErrorPopup.jsx";
import {Link} from "react-router-dom";

function SignupPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        rePassword: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            await axios.post('https://vsgoi-website.onrender.com/signup', formData);
            setSuccess('User created successfully');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('Something went wrong');
            }
        }
    };

    return (
        <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('SignupPageBackground.jpg')" }}>
            {error && <ErrorPopup message={error} />}
            {success && <SuccessPopup message={success} />}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
            <div className="relative z-10 rounded-3xl border-2 border-white backdrop-blur-xl w-full max-w-lg mx-auto p-6 lg:p-12">
                <section className="font-['raleway']">
                    <div className="flex items-center justify-center px-4 py-4 sm:px-6 sm:py-16 lg:px-8 lg:py-6">
                        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                            <img className="h-[5.5em] drop-shadow-xl" alt="vsgoiLogo" src="/vsgoi.png" />
                            <h2 className="mt-2 text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
                            <p className="mt-3.5 text-base text-white">
                                Already have an account?{' '}
                                <Link to="/Signin " title="" className="font-bold text-black transition-all duration-200 hover:underline drop-shadow-lg">
                                    Sign In
                                </Link>
                            </p>
                            <form onSubmit={handleSubmit} className="mt-3.5">
                                <div className="space-y-5">
                                    <div>
                                        <label htmlFor="fullName" className="flex text-base drop-shadow-lg font-bold text-black">
                                            Full Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border shadow-lg border-gray-300 bg-transparent text-white px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Enter Full Name"
                                                id="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="flex drop-shadow-lg text-base font-bold text-black">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                className="flex h-10 w-full rounded-md border shadow-lg border-gray-300 bg-transparent px-3 py-2 text-white text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Enter Email Address"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="password"
                                                   className="flex text-base drop-shadow-lg font-bold text-black">
                                                Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    className="flex h-10 w-full rounded-md border shadow-lg border-gray-300 bg-transparent px-3 py-2 text-white text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    id="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="rePassword"
                                                   className="flex text-base font-bold drop-shadow-lg text-black">
                                                Re-Password
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    className="flex h-10 w-full rounded-md border shadow-lg border-gray-300 bg-transparent px-3 py-2 text-white text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                    type="password"
                                                    placeholder="Re-Enter Password"
                                                    id="rePassword"
                                                    value={formData.rePassword}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="inline-flex w-full items-center drop-shadow-lg justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                        >
                                            Create Account <ArrowRight className="ml-2" size={16}/>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="mt-5 space-y-5">
                                <p className="mt-2 ml-[4em] text-white">
                                    ---------- Or Try With ----------
                                </p>
                                <button
                                    type="button"
                                    className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                                >
                                    <span className="mr-2 inline-block">
                                        <svg
                                            className="h-6 w-6 text-rose-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                        </svg>
                                    </span>
                                    <Link to={"/Signup"}>
                                        Sign up with Google
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SignupPage;
