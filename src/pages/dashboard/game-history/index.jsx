import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const GameHistory = () => {
    const [activeTab, setActiveTab] = useState("ongoing");

    const data = {
        ongoing: [
            {
                id: "ORD-8821",
                gameId: "GAME-2025-09",
                game: {
                    name: "Dice Roll",
                    verified: true,
                    avatar: "https://i.pravatar.cc/40?img=5",
                },
                date: "2025-10-13",
                time: "18:45",
                stake: "25 USDT",
                fee: "0.5 USDT",
            },
        ],
        fulfilled: [
            {
                id: "ORD-8729",
                gameId: "GAME-2025-07",
                game: {
                    name: "Coin Flip",
                    verified: false,
                    avatar: "https://i.pravatar.cc/40?img=6",
                },
                date: "2025-09-29",
                time: "15:20",
                stake: "10 USDT",
                fee: "0.2 USDT",
            },
        ],
    };

    const rows = data[activeTab];

    return (
        <div className="p-6 space-y-6 min-h-screen">
            <h1 className="text-3xl font-semibold text-white">Game History</h1>

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
                            <th className="py-3 px-4">Games</th>
                            <th className="py-3 px-4">Date</th>
                            <th className="py-3 px-4">Time</th>
                            <th className="py-3 px-4">Stake Amount</th>
                            <th className="py-3 px-4">Fee</th>
                            <th className="py-3 px-4">Game ID</th>
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
                                        src={row.game.avatar}
                                        alt={row.game.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <div className="flex items-center gap-1 font-medium">
                                            {row.game.name}
                                            {row.game.verified ? (
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
                                    </div>
                                </td>

                                <td className="py-3 px-4">{row.date}</td>
                                <td className="py-3 px-4">{row.time}</td>
                                <td className="py-3 px-4">{row.stake}</td>
                                <td className="py-3 px-4">{row.fee}</td>
                                <td className="py-3 px-4">{row.gameId}</td>
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

export default GameHistory;