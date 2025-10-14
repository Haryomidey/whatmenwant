import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
        if (!formData.password) newErrors.password = "Password is required";
        else if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (!formData.confirmPassword)
            newErrors.confirmPassword = "Please confirm your password";
        else if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Registration successful:", formData);

            localStorage.setItem("user", JSON.stringify(formData));

            navigate("/login");
        }
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-6 text-white pt-5">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-semibold">
                    Create Your Account 🚀
                </h1>
                <p className="text-gray-300">
                    Join FastPoint to start gaming and trading smarter.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                    />
                    {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                    />
                    {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                    />
                    {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
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
                        <p className="text-red-400 text-xs mt-1">{errors.password}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-400 text-xs mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary-bright text-black font-medium py-2.5 rounded-lg hover:opacity-90 transition"
                >
                    Sign Up
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
                    <span>Sign up with Google</span>
                </button>

                <button className="flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg w-full hover:bg-gray-800 transition">
                    <FaApple size={20} />
                    <span>Sign up with Apple</span>
                </button>
            </div>

            <p className="text-center text-sm">
                Already have an account?{" "}
                <Link
                    to="/login"
                    className="text-primary-bright font-medium hover:underline"
                >
                    Log in
                </Link>
            </p>
        </div>
    );
};

export default Register;