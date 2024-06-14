import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { closedEye, openEye } from "@/assets";

export default function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    const [showPassword, setShowPassword] = useState(false);

    const toggleSignup = () => {
        window.location.href = "/signup";
    };
    const toggleForgotPassword = () => {
        window.location.href = "/forgotpassword";
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">Login Up</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                            Enter your email:
                        </label>
                        <input
                            id="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            autoComplete="email"
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                            Enter your password:
                        </label>
                        <div className="relative flex items-center">
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password must be at least 8 characters long",
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                                        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number",
                                    },
                                })}
                                autoComplete="current-password"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                            />
                            <button
                                type="button"
                                className="absolute right-0 px-3 py-2 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <img src={showPassword ? closedEye : openEye} alt="toggle password visibility" width="20px" />
                            </button>
                        </div>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <input
                        id="submit"
                        name="submit"
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    />

                    <p className="mt-4 text-sm text-center text-gray-700 dark:text-white">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={toggleSignup}
                        >
                            Sign up here
                        </button>
                    </p>
                    <p className="mt-4 text-sm text-center text-gray-700 dark:text-white">
                        Forgot Password?{" "}
                        <button
                            type="button"
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={toggleForgotPassword}
                        >
                            Click here
                        </button>
                    </p>

                </form>


            </div>

        </>
    )

} 
