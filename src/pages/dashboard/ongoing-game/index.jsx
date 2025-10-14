import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const OngoingGame = ({ game = "PES 24" }) => {
    const [time, setTime] = useState(54); // seconds
    const [canChooseResult, setCanChooseResult] = useState(false);

    useEffect(() => {
        if (time > 0) {
            const timer = setInterval(() => setTime((t) => t - 1), 1000);
            return () => clearInterval(timer);
        } else {
            setCanChooseResult(true);
        }
    }, [time]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleCancel = () => alert("Game canceled");
    const handleResult = (result) => alert(`You selected: ${result}`);

    return (
        <div className="min-h-screen bg-[#040404] text-white flex flex-col justify-center items-center p-6">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 w-full max-w-md text-center shadow-xl space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-primary-bright">
                    Your Game Has Started
                </h2>

                {/* Timer */}
                <p className="text-gray-300 text-sm flex justify-center items-center gap-2">
                    Time –{" "}
                    <span
                        className={`font-mono font-semibold text-2xl ${
                            time > 0
                                ? "text-primary-bright animate-[pulseGlow_1s_ease-in-out_infinite]"
                                : "text-green-400"
                        }`}
                    >
                        {formatTime(time)}
                    </span>
                </p>

                {/* Cancel Button */}
                <button
                    onClick={handleCancel}
                    className="bg-gray-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
                >
                    Cancel Game
                </button>

                {/* Chat */}
                <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat</span>
                </div>

                {/* Game Info */}
                <div className="space-y-3 bg-[#2A2A2A] rounded-xl py-4 px-5">
                    <p className="text-sm text-gray-400">
                        Your {game} ID:
                    </p>
                    <p className="font-mono text-primary-bright text-lg">
                        948hfnkslkwoi9287498
                    </p>

                    <p className="text-lg font-semibold text-white mt-2">
                        107 USDT
                    </p>

                    <p className="text-sm text-gray-300">
                        You're Staking:{" "}
                        <span className="font-semibold text-white">107 USDT</span>
                    </p>
                </div>

                {/* Notice */}
                <p className="text-gray-400 text-sm mt-4">
                    Wait for the timer to finish before choosing your result.
                </p>

                {/* Result Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {["I WON", "I LOSE", "DRAW", "APPEAL"].map((result) => (
                        <button
                            key={result}
                            onClick={() => handleResult(result)}
                            disabled={!canChooseResult}
                            className={`px-6 py-2 rounded-lg font-medium transition ${
                                canChooseResult
                                    ? result === "I WON"
                                        ? "bg-green-500 text-black hover:bg-green-400"
                                        : result === "I LOSE"
                                        ? "bg-red-500 text-black hover:bg-red-400"
                                        : result === "DRAW"
                                        ? "bg-yellow-400 text-black hover:bg-yellow-300"
                                        : "bg-blue-500 text-black hover:bg-blue-400"
                                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                            {result}
                        </button>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes pulseGlow {
                    0%, 100% {
                        text-shadow: 0 0 5px #00ffcc, 0 0 15px #00ffcc, 0 0 30px #00ffcc;
                        opacity: 1;
                    }
                    50% {
                        text-shadow: 0 0 20px #00ffaa, 0 0 40px #00ffaa, 0 0 60px #00ffaa;
                        opacity: 0.7;
                    }
                }
            `}</style>
        </div>
    );
};

export default OngoingGame;