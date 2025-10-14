import React, { useState, useEffect } from "react";
import { CheckCircle, Clock } from "lucide-react";
import { images } from "../../../assets/images";

const P2PTrade = () => {
    const [activeTab, setActiveTab] = useState("buy");
    const [showModal, setShowModal] = useState(false);
    const [selectedTrader, setSelectedTrader] = useState(null);
    const [timeLeft, setTimeLeft] = useState(300); // 5-minute timer

    // Wallet balance in USD
    const walletBalance = 523.45;

    // Dummy Buyers (you are buying from them)
    const buyers = [
        { id: 1, name: "CryptoKing", rate: 1500, verified: true, method: "Bank Transfer", bank: "Zenith Bank", account: "1234567890" },
        { id: 2, name: "JaneFX", rate: 1498, verified: false, method: "Bank Transfer", bank: "Access Bank", account: "2234567890" },
        { id: 3, name: "TraderBoss", rate: 1502, verified: true, method: "Bank Transfer", bank: "GTBank", account: "3234567890" },
    ];

    // Dummy Sellers (you are selling to them)
    const sellers = [
        { id: 4, name: "CoinDealer", rate: 1490, verified: true, method: "Bank Transfer", bank: "UBA", account: "4234567890" },
        { id: 5, name: "NaijaTrader", rate: 1485, verified: false, method: "Bank Transfer", bank: "First Bank", account: "5234567890" },
        { id: 6, name: "BitQueen", rate: 1492, verified: true, method: "Bank Transfer", bank: "Kuda Bank", account: "6234567890" },
    ];

    // Countdown logic
    useEffect(() => {
        if (showModal && timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [showModal, timeLeft]);

    const openModal = (trader) => {
        setSelectedTrader(trader);
        setShowModal(true);
        setTimeLeft(300);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedTrader(null);
    };

    const handleSent = () => {
        setTimeout(() => {
            setShowModal(false);
            setSelectedTrader(null);
        }, 1000);
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" + s : s}`;
    };

    const traderList = activeTab === "buy" ? buyers : sellers;

    return (
        <div className="text-white bg-[#040404] min-h-screen p-6 sm:p-10">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-3xl">P2P</h2>
                    |
                    <p>NGN</p>
                </div>
                <div>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                        Total Wallet Balance
                    </p>
                    <h2 className="text-2xl font-semibold">${walletBalance.toFixed(2)}</h2>
                </div>
            </div>

            <div className="mb-8">
                <img src={images.tradeImage} alt="" />
            </div>

            <div className="flex items-center justify-between rounded-xl gap-6 mb-4 py-3 px-5 w-full bg-[#1e1e1ec0]">
                <div className="flex gap-3">
                    <button
                        onClick={() => setActiveTab("buy")}
                        className={`px-6 py-2 rounded-lg font-medium transition ${activeTab === "buy"
                            ? "bg-primary-bright text-black"
                            : "bg-[#464444] hover:bg-[#262626]"
                        }`}
                    >
                        Buy
                    </button>
                    <button
                        onClick={() => setActiveTab("sell")}
                        className={`px-6 py-2 rounded-lg font-medium transition ${activeTab === "sell"
                            ? "bg-red-500 text-black"
                            : "bg-[#464444] hover:bg-[#262626]"
                        }`}
                    >
                        Sell
                    </button>
                </div>

                <p>USDT</p>
            </div>

            <div className="space-y-4">
                {traderList.map((trader) => (
                    <div
                        key={trader.id}
                        className="flex items-center justify-between bg-[#1E1E1E] p-5 rounded-xl hover:bg-[#2A2A2A] transition"
                    >
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-semibold">{trader.name}</span>
                                {trader.verified && (
                                    <CheckCircle
                                        className={`w-4 h-4 ${activeTab === "buy"
                                            ? "text-primary-bright"
                                            : "text-red-500"
                                        }`}
                                    />
                                )}
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                                {trader.method} • Rate:{" "}
                                <span className={`${activeTab === "buy"
                                    ? "text-primary-bright"
                                    : "text-red-400"
                                } font-medium`}>
                                    ₦{trader.rate.toLocaleString()} / USDT
                                </span>
                            </p>
                        </div>
                        <button
                            onClick={() => openModal(trader)}
                            className={`px-5 py-2 rounded-lg font-medium transition ${activeTab === "buy"
                                ? "bg-primary-bright text-black hover:opacity-90"
                                : "bg-red-500 text-black hover:bg-red-600"
                            }`}
                        >
                            {activeTab === "buy" ? "Buy" : "Sell"}
                        </button>
                    </div>
                ))}
            </div>

            {showModal && selectedTrader && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#1E1E1E] p-6 rounded-xl w-full max-w-sm text-center space-y-5 relative">
                        <h3 className="text-xl font-semibold">
                            {activeTab === "buy" ? "Buy from" : "Sell to"} {selectedTrader.name}
                        </h3>

                        <div className="bg-[#2C2C2C] rounded-lg p-4 text-left space-y-2 text-sm">
                            <p>
                                <span className="text-gray-400">Bank:</span> {selectedTrader.bank}
                            </p>
                            <p>
                                <span className="text-gray-400">Account No:</span> {selectedTrader.account}
                            </p>
                            <p>
                                <span className="text-gray-400">Rate:</span> ₦{selectedTrader.rate.toLocaleString()} / USDT
                            </p>
                            <p className="text-gray-400">Method: {selectedTrader.method}</p>
                        </div>

                        {/* Countdown */}
                        <div className="flex items-center justify-center gap-2 text-gray-300">
                            <Clock className="w-4 h-4" />
                            <span>Time left: {formatTime(timeLeft)}</span>
                        </div>

                        <button
                            onClick={handleSent}
                            className={`w-full py-2 rounded-lg font-medium transition ${activeTab === "buy"
                                ? "bg-primary-bright text-black hover:opacity-90"
                                : "bg-red-500 text-black hover:bg-red-600"
                            }`}
                        >
                            I have sent it
                        </button>

                        <button
                            onClick={closeModal}
                            className="text-gray-400 text-sm mt-3 hover:text-gray-200"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default P2PTrade;