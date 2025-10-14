import React, { useRef } from "react";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
    const inputsRef = useRef([]);

    const handleChange = (e, index) => {
        const value = e.target.value;

        if (/^[0-9]$/.test(value)) {
            if (index < inputsRef.current.length - 1) {
                inputsRef.current[index + 1].focus();
            }
        } else {
            e.target.value = "";
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").trim();
        if (/^\d{4}$/.test(pasteData)) {
            pasteData.split("").forEach((char, i) => {
                if (inputsRef.current[i]) {
                    inputsRef.current[i].value = char;
                }
            });
            inputsRef.current[3].focus();
        }
    };

    return (
        <div className="w-full h-full max-w-md mx-auto flex flex-col items-center justify-center space-y-6 text-white">
            <div className="text-center space-y-1">
                <h1 className="text-3xl font-semibold">Verify Your Account 🔐</h1>
                <p className="text-gray-300">Enter the 4-digit code sent to your email or phone.</p>
            </div>

            <form className="flex flex-col items-center space-y-6">
                <div className="flex justify-center gap-3" onPaste={handlePaste}>
                    {[...Array(4)].map((_, i) => (
                        <input
                            key={i}
                            type="text"
                            maxLength={1}
                            ref={(el) => {
                                if (el) inputsRef.current[i] = el;
                            }}
                            onChange={(e) => handleChange(e, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className="w-14 h-14 text-center text-lg font-semibold border border-gray-300 rounded-lg bg-transparent focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                        />
                    ))}
                </div>

                <button
                    type="submit"
                    className="w-full bg-primary-bright text-black font-medium py-2.5 rounded-lg hover:opacity-90 transition"
                >
                    Verify Code
                </button>
            </form>

            <div className="text-center text-sm space-y-2">
                <p className="text-gray-300">Didn't receive the code?</p>
                <button type="button" className="text-primary-bright font-medium hover:underline">
                    Resend OTP
                </button>
            </div>

            <p className="text-center text-sm">
                <Link to="/login" className="text-primary-bright font-medium hover:underline">
                    Back to Login
                </Link>
            </p>
        </div>
    );
};

export default VerifyOtp;