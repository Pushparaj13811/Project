import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { closedEye, openEye } from "@/assets";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const password = watch("password", "");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const evaluatePasswordStrength = (password) => {
      let score = 0;

      if (password.length >= 8) score += 1;
      if (password.length >= 12) score += 1;

      if (/[A-Z]/.test(password)) score += 1;
      if (/[a-z]/.test(password)) score += 1;

      if (/\d/.test(password)) score += 1;
      if (/\d.*\d/.test(password)) score += 1;

      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
      if (specialCharRegex.test(password)) score += 1;
      if (password.match(specialCharRegex) && password.match(specialCharRegex).length > 1) score += 1;

      const commonPatterns = [
        /^(.)\1+$/,
        /^(0123456789|9876543210|qwerty|asdfgh|zxcvbn|password)$/i,
        /^(123456|654321|abcdef|fedcba)$/i,
      ];

      commonPatterns.forEach(pattern => {
        if (pattern.test(password)) score -= 1;
      });

      if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && specialCharRegex.test(password)) {
        score += 2;
      }

      score = Math.max(score, 0);

      return score;
    };


    setPasswordStrength(evaluatePasswordStrength(password));
  }, [password]);

  const getStrengthColor = () => {
    if (passwordStrength <= 4) return "bg-red-500";
    if (passwordStrength <= 5) return "bg-yellow-500";
    if (passwordStrength <= 6) return "bg-blue-500";
    return "bg-green-500";
  };

  const toggleLogin = () => {
    window.location.href = "/login"
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">Sign Up</h2>

        <div className="mb-4">

          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            Enter your name:
          </label>
          <input
            id="name"
            defaultValue=""
            {...register("name", { required: "Name is required" })}
            autoComplete="name"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black dark:text-white dark:bg-gray-700 focus:ring-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

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

          {/* Password Strength Bar */}
          <div className="flex mt-2 space-x-1">
            <div className={`h-2 flex-1 rounded-full ${passwordStrength >= 1 ? getStrengthColor() : "bg-gray-300"}`}></div>
            <div className={`h-2 flex-1 rounded-full ${passwordStrength >= 4 ? getStrengthColor() : "bg-gray-300"}`}></div>
            <div className={`h-2 flex-1 rounded-full ${passwordStrength >= 5 ? getStrengthColor() : "bg-gray-300"}`}></div>
            <div className={`h-2 flex-1 rounded-full ${passwordStrength >= 6 ? getStrengthColor() : "bg-gray-300"}`}></div>
          </div>
        </div>

        <div className="mb-6 relative">
          <label htmlFor="cpassword" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            Confirm password:
          </label>
          <div className="relative flex items-center">
            <input
              id="cpassword"
              type={showConfirmPassword ? "text" : "password"}
              {...register("cpassword", {
                required: "Confirm password is required",
                validate: (value) => value === password || "Passwords do not match",
              })}
              autoComplete= "disabled"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 ${errors.cpassword ? "border-red-500" : "border-gray-300"
                }`}
            />
            <button
              type="button"
              className="absolute right-0 px-3 py-2 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <img src={showConfirmPassword ? closedEye : openEye} alt="toggle password visibility" width="20px" />
            </button>
          </div>
          {errors.cpassword && <span className="text-red-500 text-sm">{errors.cpassword.message}</span>}
        </div>

        <input
          id="submit"
          name="submit"
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
  );
}
