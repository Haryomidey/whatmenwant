import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [loginError, setLoginError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email))
            newErrors.email = "Invalid email format";

        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError("");

        if (validate()) {
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (
                storedUser &&
                storedUser.email === formData.email &&
                storedUser.password === formData.password
            ) {
                console.log("Login successful:", formData);
                localStorage.setItem("isLoggedIn", "true");

                navigate("/dashboard");
            } else {
                setLoginError("Invalid email or password");
            }
        }
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-6 text-white pt-10">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-semibold">Welcome Back 👋</h1>
                <p className="text-gray-300">Log in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                    />
                    {errors.password && (
                        <p className="text-red-400 text-xs mt-1">
                            {errors.password}
                        </p>
                    )}
                </div>

                {loginError && (
                    <p className="text-red-400 text-sm text-center">
                        {loginError}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-primary-bright text-black font-medium py-2.5 rounded-lg hover:opacity-90 transition"
                >
                    Login
                </button>
            </form>

            <div className="flex items-center gap-2 text-sm">
                <div className="flex-grow h-px bg-gray-300" />
                or
                <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg w-full hover:bg-gray-800 transition">
                    <FcGoogle size={20} />
                    <span>Login with Google</span>
                </button>

                <button className="flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg w-full hover:bg-gray-800 transition">
                    <FaApple size={20} />
                    <span>Login with Apple</span>
                </button>
            </div>

            <p className="text-center text-sm">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="text-primary-bright font-medium hover:underline"
                >
                    Sign up
                </Link>
            </p>
        </div>
    );
};

export default Login;