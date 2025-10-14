import React, { useState, useEffect } from "react";

const Trades = () => {
    const [fromAmount, setFromAmount] = useState("");
    const [fromCoin, setFromCoin] = useState("USDT");
    const [toAmount, setToAmount] = useState("");
    const [toCoin, setToCoin] = useState("BTC");
    const [conversionRate, setConversionRate] = useState(0);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);
    const [tradeSuccess, setTradeSuccess] = useState(false);

    // Mock conversion rates (1 unit of base currency = rate in target)
    const rates = {
        USDT: { BTC: 0.000015, ETH: 0.00025, BNB: 0.0019 },
        BTC: { USDT: 65000, ETH: 17.2, BNB: 125 },
        ETH: { USDT: 3800, BTC: 0.058, BNB: 7.2 },
        BNB: { USDT: 520, BTC: 0.008, ETH: 0.14 },
    };

    // Update conversion whenever inputs or coins change
    useEffect(() => {
        if (fromCoin === toCoin || !fromAmount) {
            setToAmount(fromAmount);
            setConversionRate(1);
            return;
        }

        const rate = rates[fromCoin]?.[toCoin] || 0;
        setConversionRate(rate);
        const converted = parseFloat(fromAmount) * rate;
        setToAmount(converted ? converted.toFixed(6) : "");
    }, [fromAmount, fromCoin, toCoin]);

    const handleProceed = () => {
        if (!fromAmount || !toAmount) return;
        setShowConfirmModal(true);
    };

    const handleConfirmTrade = () => {
        setShowConfirmModal(false);
        const success = Math.random() > 0.3;
        setTradeSuccess(success);
        setShowResultModal(true);
    };

    const closeModal = () => {
        setShowConfirmModal(false);
        setShowResultModal(false);
    };

    return (
        <div className="text-white bg-[#040404] min-h-screen p-6 sm:p-10">
            <div className="max-w-lg mx-auto bg-[#1E1E1E] p-6 rounded-xl shadow-lg space-y-6">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-center">
                    Trade your currencies
                </h2>

                {/* From Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                        You Send
                    </label>
                    <div className="flex gap-3">
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={fromAmount}
                            onChange={(e) => setFromAmount(e.target.value)}
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-transparent placeholder-gray-500 focus:border-primary-bright focus:ring-2 focus:ring-primary-bright/40 transition-all"
                        />
                        <select
                            value={fromCoin}
                            onChange={(e) => setFromCoin(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-gray-600 bg-[#2C2C2C] focus:border-primary-bright transition"
                        >
                            <option>USDT</option>
                            <option>BTC</option>
                            <option>ETH</option>
                            <option>BNB</option>
                        </select>
                    </div>
                </div>

                {/* To Input */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                        You Receive
                    </label>
                    <div className="flex gap-3">
                        <input
                            type="number"
                            placeholder="Converted amount"
                            value={toAmount}
                            readOnly
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-600 bg-transparent text-gray-400"
                        />
                        <select
                            value={toCoin}
                            onChange={(e) => setToCoin(e.target.value)}
                            className="px-3 py-2 rounded-lg border border-gray-600 bg-[#2C2C2C] focus:border-primary-bright transition"
                        >
                            <option>BTC</option>
                            <option>USDT</option>
                            <option>ETH</option>
                            <option>BNB</option>
                        </select>
                    </div>
                </div>

                {/* Conversion Rate */}
                {fromCoin !== toCoin && conversionRate > 0 && (
                    <p className="text-sm text-gray-400 text-center">
                        1 {fromCoin} = {conversionRate} {toCoin}
                    </p>
                )}

                {/* Proceed Button */}
                <button
                    onClick={handleProceed}
                    className="w-full bg-primary-bright text-black font-medium py-2.5 rounded-lg hover:opacity-90 transition"
                >
                    Proceed
                </button>
            </div>

            {/* Confirm Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#1E1E1E] p-6 rounded-xl max-w-sm w-full text-center space-y-4">
                        <h3 className="text-lg font-semibold">
                            Confirm Trade
                        </h3>
                        <p className="text-gray-400 text-sm">
                            You’re about to trade{" "}
                            <span className="font-semibold">
                                {fromAmount} {fromCoin}
                            </span>{" "}
                            for{" "}
                            <span className="font-semibold">
                                {toAmount} {toCoin}
                            </span>.
                        </p>
                        <div className="flex justify-center gap-4 mt-4">
                            <button
                                onClick={handleConfirmTrade}
                                className="bg-primary-bright text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                            >
                                Proceed
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Result Modal */}
            {showResultModal && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-[#1E1E1E] p-6 rounded-xl max-w-sm w-full text-center space-y-4">
                        <h3 className="text-lg font-semibold">
                            {tradeSuccess ? "Trade Successful ✅" : "Trade Failed ❌"}
                        </h3>
                        <p className="text-gray-400 text-sm">
                            {tradeSuccess
                                ? `You successfully traded ${fromAmount} ${fromCoin} for ${toAmount} ${toCoin}.`
                                : "Something went wrong, please try again."}
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-primary-bright text-black px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trades;