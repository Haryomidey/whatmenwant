import { useState } from "react";
import { CheckCircle, Star } from "lucide-react";
import { images } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

const PlayGame = () => {
    const [activeTab, setActiveTab] = useState("Chess Arena");
    const walletBalance = 254.67;

    const games = [
        {
            id: 1,
            username: "CryptoKing",
            verified: true,
            game: "Chess Arena",
            rating: 4.8,
            stake: 10,
            rateNGN: "₦15,000 - ₦15,500",
            avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=king",
        },
        {
            id: 2,
            username: "SmartPawn",
            verified: false,
            game: "Chess Arena",
            rating: 4.1,
            stake: 7,
            rateNGN: "₦10,000 - ₦10,500",
            avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=pawn",
        },
        {
            id: 3,
            username: "GameSlayer",
            verified: false,
            game: "COD Warzone",
            rating: 4.2,
            stake: 20,
            rateNGN: "₦30,000 - ₦31,000",
            avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=slayer",
        },
        {
            id: 4,
            username: "FastMoney",
            verified: true,
            game: "PES 24",
            rating: 5.0,
            stake: 50,
            rateNGN: "₦75,000 - ₦78,000",
            avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=fast",
        },
        {
            id: 5,
            username: "GoalDigger",
            verified: true,
            game: "PES 24",
            rating: 4.7,
            stake: 25,
            rateNGN: "₦37,000 - ₦39,000",
            avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=goal",
        },
        {
            id: 6,
            username: "NoobMaster",
            verified: false,
            game: "COD Warzone",
            rating: 3.9,
            stake: 5,
            rateNGN: "₦7,000 - ₦8,000",
            avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=noob",
        },
    ];

    const gameTabs = ["Chess Arena", "COD Warzone", "PES 24"];
    const filteredGames = games.filter((g) => g.game === activeTab);
    const navigate = useNavigate();

    const handleStake = () => {
        navigate(`/game-order`)
    }

    return (
        <div className="min-h-screen bg-[#040404] text-white p-6 sm:p-10">
            <div className="rounded-2xl flex items-center justify-between mb-4">
                <h2 className="text-3xl">P2P Gaming</h2>
                <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide">
                        Total Wallet Balance
                    </p>
                    <h2 className="text-3xl font-semibold mt-1">
                        {walletBalance} USDT
                    </h2>
                </div>
            </div>

            <img src={images.p2pGaming} alt="" />

            <div className="flex justify-center gap-4 mt-8 flex-wrap">
                {gameTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                            activeTab === tab
                                ? "bg-primary-bright text-black"
                                : "bg-[#1E1E1E] text-gray-300 hover:bg-[#2A2A2A]"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="mt-8 space-y-4">
                {filteredGames.map((game) => (
                    <div
                        key={game.id}
                        className="bg-[#1A1A1A] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-[#232323] transition-all duration-200"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={game.avatar}
                                alt={game.username}
                                className="w-12 h-12 rounded-full border border-gray-600"
                            />
                            <div>
                                <div className="flex items-center gap-2">
                                    <p className="font-semibold text-base">{game.username}</p>
                                    {game.verified && (
                                        <CheckCircle className="w-4 h-4 text-primary-bright" />
                                    )}
                                </div>
                                <p className="text-sm text-gray-400">{game.game}</p>
                                <div className="flex items-center gap-1 mt-1">
                                    <Star className="w-4 h-4 text-yellow-400" />
                                    <span className="text-xs text-gray-300">
                                        {game.rating.toFixed(1)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 sm:mt-0 text-right">
                            <p className="text-sm text-gray-400">
                                Stake:{" "}
                                <span className="font-semibold text-white">
                                    {game.stake} USDT
                                </span>
                            </p>
                            <p className="text-xs text-gray-500">{game.rateNGN}</p>

                            <button onClick={handleStake} className="mt-2 bg-primary-bright text-black px-4 py-1.5 rounded-lg text-sm font-medium hover:opacity-90 transition">
                                Stake
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PlayGame;