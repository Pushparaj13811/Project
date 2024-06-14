// src/Contact.js
import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission, e.g., send data to server
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">Contact Us</h2>
                {/* Company Details */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-black dark:text-white">Our Company</h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">Story Sharing Platform Inc.</p>
                    <p className="text-gray-700 dark:text-gray-300">123 Story Lane</p>
                    <p className="text-gray-700 dark:text-gray-300">Fiction City, FS 12345</p>
                    <p className="text-gray-700 dark:text-gray-300">Phone: (123) 456-7890</p>
                    <p className="text-gray-700 dark:text-gray-300">Email: info@storysharingplatform.com</p>
                    <div className="mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook</a>
                        <span className="mx-2">|</span>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                        <span className="mx-2">|</span>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Enter a valid email address"
                            }
                        })}
                        autoComplete="email"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        {...register("message", { required: "Message is required" })}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.message ? "border-red-500" : "border-gray-300"}`}
                        rows="4"
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                </div>

                <input
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    value="Send Message"
                />
            </form>
        </div>
    );
}

export default Contact;
