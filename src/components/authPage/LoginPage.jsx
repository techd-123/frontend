import React, { useState } from "react";

// Responsive Login Form (TailwindCSS)
// - Default export React component
// - Client-side validation (email format, password length)
// - Accessible (aria-*), keyboard friendly
// - Eye toggle for password visibility
// - Shows inline error messages and a summary on submit

import { Link } from "react-router-dom";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  // Validation rules
  const validate = () => {
    const errors = {};
    if (!email) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Enter a valid email.";

    if (!password) errors.password = "Password is required.";
    else if (password.length < 6)
      errors.password = "Password must be at least 6 characters.";

    return errors;
  };

  const errors = validate();
  const isValid = Object.keys(errors).length === 0;

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    setServerError("");

    if (!isValid) return;

    // Example submission flow (user can pass in an onSubmit prop)
    setLoading(true);
    try {
      if (onSubmit) {
        await Promise.resolve(onSubmit({ email, password }));
      } else {
        // mock behaviour: simulate server delay and success
        await new Promise((r) => setTimeout(r, 700));
        console.log("Form submitted", { email, password });
      }
    } catch (err) {
      setServerError(err?.message || "Failed to login. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6">
      <main className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Welcome back
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign in to continue to your account
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow ${
              errors.email && touched.email
                ? "border-red-300 bg-red-50"
                : "border-gray-200"
            }`}
            placeholder="you@example.com"
          />
          {touched.email && errors.email && (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {errors.email}
            </p>
          )}

          {/* Password */}
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                aria-invalid={!!errors.password}
                aria-describedby={
                  errors.password ? "password-error" : undefined
                }
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow ${
                  errors.password && touched.password
                    ? "border-red-300 bg-red-50"
                    : "border-gray-200"
                }`}
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {touched.password && errors.password && (
              <p className="mt-2 text-sm text-red-600" id="password-error">
                {errors.password}
              </p>
            )}
          </div>

          {/* Remember + Forgot */}
          <div className="mt-4 flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" className="rounded" />
              <span className="text-gray-600">Remember me</span>
            </label>

            <a href="#" className="text-indigo-600 hover:underline">
              Forgot?
            </a>
          </div>

          {/* Server error summary */}
          {serverError && (
            <div className="mt-4 rounded-md bg-red-50 border border-red-100 p-3 text-sm text-red-700">
              {serverError}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full py-3 rounded-lg text-white font-medium shadow-sm transition-opacity disabled:opacity-60 disabled:cursor-not-allowed ${
              isValid ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-400"
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Create one
          </Link>
        </div>
      </main>
    </div>
  );
}
