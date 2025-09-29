import React, { useState } from "react";
import { registerUser } from "../../Api/Axios"; // import your API function

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [serverError, setServerError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errors = {};
    if (!username) errors.username = "Username is required.";
    else if (username.length < 3)
      errors.username = "Username must be at least 3 characters.";

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
    setTouched({ username: true, email: true, password: true });
    setServerError("");
    setSuccessMessage("");

    if (!isValid) return;

    setLoading(true);
    try {
      const data = await registerUser({ username, email, password });
      setSuccessMessage("User registered successfully!");
      console.log("Registered:", data);
      // Optionally reset the form
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setServerError(err.detail || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 p-6">
      <main className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
          Create an account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Sign up to start your journey with us
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Username */}
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => handleBlur("username")}
            aria-invalid={!!errors.username}
            aria-describedby={errors.username ? "username-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow ${
              errors.username && touched.username
                ? "border-red-300 bg-red-50"
                : "border-gray-200"
            }`}
            placeholder="Enter your username"
          />
          {touched.username && errors.username && (
            <p className="mt-2 text-sm text-red-600" id="username-error">
              {errors.username}
            </p>
          )}

          {/* Email */}
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
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
          </div>

          {/* Password */}
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
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

          {/* Server error / success */}
          {serverError && (
            <div className="mt-4 rounded-md bg-red-50 border border-red-100 p-3 text-sm text-red-700">
              {serverError}
            </div>
          )}
          {successMessage && (
            <div className="mt-4 rounded-md bg-green-50 border border-green-100 p-3 text-sm text-green-700">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full py-3 rounded-lg text-white font-medium shadow-sm transition-opacity disabled:opacity-60 disabled:cursor-not-allowed ${
              isValid ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-400"
            }`}
          >
            {loading ? "Creating account..." : "Sign up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Sign in
          </a>
        </div>
      </main>
    </div>
  );
}
