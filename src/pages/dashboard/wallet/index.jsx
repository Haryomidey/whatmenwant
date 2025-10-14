import { ArrowDownLeft, Send, Repeat } from "lucide-react";
import { images } from "../../../assets/images";

const Wallet = () => {
    const totalBalance = 1243.56;

    const assets = [
        {
            name: "Tether (USDT)",
            symbol: "USDT",
            logo: images.usdt,
            balance: 650.23,
            usdValue: 650.23,
        },
        {
            name: "Bitcoin (BTC)",
            symbol: "BTC",
            logo: images.bitcoin,
            balance: 0.023,
            usdValue: 1587.42,
        },
        {
            name: "Ethereum (ETH)",
            symbol: "ETH",
            logo: images.eth,
            balance: 0.88,
            usdValue: 2490.56,
        },
        {
            name: "BNB",
            symbol: "BNB",
            logo: images.bnb,
            balance: 3.14,
            usdValue: 1850.75,
        },
    ];

    return (
        <div className="min-h-screen bg-[#040404] text-white p-6 sm:p-10">
            {/* Wallet Balance Card */}
            <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0E0E0E] rounded-2xl p-6 sm:p-10 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">Total Wallet Balance</p>
                    <h2 className="text-4xl font-bold mt-2">{totalBalance.toLocaleString()} USDT</h2>

                    <div className="flex gap-4 mt-6">
                        <ActionButton icon={<ArrowDownLeft size={18} />} label="Receive" />
                        <ActionButton icon={<Send size={18} />} label="Transfer" />
                        <ActionButton icon={<Repeat size={18} />} label="Convert" />
                    </div>
                </div>

                <img
                    src={images.walletImage}
                    alt="wallet illustration"
                    className="w-40 sm:w-52 object-contain"
                />
            </div>

            {/* Asset List */}
            <div className="mt-10 space-y-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-300">Your Assets</h3>
                {assets.map((asset, index) => (
                    <div
                        key={index}
                        className="bg-[#1A1A1A] rounded-xl p-4 flex items-center justify-between hover:bg-[#232323] transition-all duration-200"
                    >
                        <div className="flex items-center gap-3">
                            <img
                                src={asset.logo}
                                alt={asset.name}
                                className="w-8 h-8 rounded-full bg-white/10 p-1"
                            />
                            <div>
                                <p className="text-sm font-medium">{asset.name}</p>
                                <p className="text-xs text-gray-400">{asset.symbol}</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-sm font-semibold">
                                {asset.balance} {asset.symbol}
                            </p>
                            <p className="text-xs text-gray-400">${asset.usdValue.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ActionButton = ({ icon, label }) => (
    <button className="flex items-center flex-col bg-[#00E676] text-black font-medium px-4 py-2 rounded-lg hover:opacity-90 transition">
        {icon}
        <span className="text-xs mt-1">{label}</span>
    </button>
);

export default Wallet;