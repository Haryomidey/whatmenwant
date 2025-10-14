import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const P2PHistory = () => {
    const [activeTab, setActiveTab] = useState("ongoing");

    const data = {
        ongoing: [
            {
                id: "ORD-2311",
                asset: {
                    name: "John Doe",
                    verified: true,
                    coin: "USDT",
                    avatar: "https://i.pravatar.cc/40?img=1",
                },
                date: "2025-10-12",
                time: "14:30",
                amount: "500 USDT",
                fee: "1 USDT",
                status: "Pending",
            },
        ],
        fulfilled: [
            {
                id: "ORD-2309",
                asset: {
                    name: "Jane Smith",
                    verified: false,
                    coin: "BTC",
                    avatar: "https://i.pravatar.cc/40?img=2",
                },
                date: "2025-09-30",
                time: "09:45",
                amount: "0.05 BTC",
                fee: "0.0001 BTC",
                status: "Completed",
            },
        ],
    };

    const rows = data[activeTab];

    return (
        <div className="p-6 space-y-6 min-h-screen">
            <h1 className="text-3xl font-semibold text-white">P2P History</h1>

            <div className="flex gap-3">
                <button
                    onClick={() => setActiveTab("ongoing")}
                    className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                        activeTab === "ongoing"
                            ? "bg-yellow-500 text-black"
                            : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"
                    }`}
                >
                    Ongoing
                </button>

                <button
                    onClick={() => setActiveTab("fulfilled")}
                    className={`px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
                        activeTab === "fulfilled"
                            ? "bg-primary-bright text-black"
                            : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"
                    }`}
                >
                    Fulfilled
                </button>
            </div>

            <div className="shadow-sm overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b text-white text-left">
                            <th className="py-3 px-4">Asset</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Time</th>
                            <th className="py-3 px-4">Amount</th>
                            <th className="py-3 px-4">Fee</th>
                            <th className="py-3 px-4">Status</th>
                            <th className="py-3 px-4">Order ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr
                                key={row.id}
                                className="border-b hover:bg-[#44444493] transition-colors text-white"
                            >
                                <td className="py-3 px-4 flex items-center gap-3">
                                    <img
                                        src={row.asset.avatar}
                                        alt={row.asset.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1 font-medium">
                                            {row.asset.name}
                                            {row.asset.verified ? (
                                                <CheckCircle
                                                    size={14}
                                                    className="text-green-500"
                                                />
                                            ) : (
                                                <XCircle
                                                    size={14}
                                                    className="text-gray-400"
                                                />
                                            )}
                                        </div>
                                        <div className="text-xs text-gray-200">
                                            {row.asset.coin}
                                        </div>
                                    </div>
                                </td>

                                <td className="py-3 px-4">{row.date}</td>
                                <td className="py-3 px-4">{row.time}</td>
                                <td className="py-3 px-4">{row.amount}</td>
                                <td className="py-3 px-4">{row.fee}</td>
                                <td className="py-3 px-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            row.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4">{row.id}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {rows.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                        No records found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default P2PHistory;