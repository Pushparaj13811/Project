import React from 'react';
import { useForm } from 'react-hook-form'

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    const toggleLogin = () => {
        window.location.href = "/login";
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <form onSubmit={handleSubmit(onSubmit)}
                    className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">Forgot Password</h2>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
                            Enter your email:
                        </label>
                        <input
                            id='email'
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            autoComplete='email'
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <input
                        id='submit'
                        name='submit'
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    />
                    <p className="mt-4 text-sm text-center text-gray-700 dark:text-white">
                        Already Have an account?{" "}
                        <button
                            type="button"
                            className="text-blue-500 hover:underline focus:outline-none"
                            onClick={toggleLogin}
                        >
                            Login here
                        </button>
                    </p>

                </form>
            </div>
        </>
    )
}

export default ForgotPassword
