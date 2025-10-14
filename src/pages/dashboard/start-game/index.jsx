import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { images } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

const StartGame = ({ game = "PES 24" }) => {
    const navigate = useNavigate();
    const [gameId] = useState("948hfnkslkwoi9287498");
    const [stake] = useState(107);

    const handleStart = () => {
        navigate('/ongoing-game')
    };

    const handleCancel = () => {
        alert("Game canceled");
    };

    return (
        <div className="min-h-screen bg-[#040404] text-white py-6 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-center">
            <div className="w-full flex items-center justify-center mb-8 md:mb-0 h-full max-h-[550px]">
                <img
                    src={images.gameOrder}
                    alt="Start game illustration"
                    className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
            </div>

            <div className="w-full bg-[#1A1A1A] p-8 rounded-2xl shadow-xl space-y-6">
                <h2 className="text-2xl font-semibold">
                    Start <span className="text-primary-bright">{game}</span>
                </h2>

                <div className="space-y-4">
                    <div className="text-center bg-[#2A2A2A] py-3 rounded-lg">
                        <p className="text-lg font-semibold">{stake} USDT</p>
                        <div className="flex justify-center items-center gap-2 text-sm text-gray-400 mt-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>Chat</span>
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm text-center leading-relaxed">
                        <span className="font-semibold text-white">Staking {stake} USDT.</span>
                        <br />
                        Funds will be transferred or deducted automatically from your wallet depending on the game outcome.
                    </p>

                    <div className="bg-[#2A2A2A] rounded-lg px-4 py-3 text-center">
                        <p className="text-sm text-gray-400">Your {game} ID:</p>
                        <p className="font-mono text-primary-bright mt-1">{gameId}</p>
                    </div>

                    <div className="flex justify-center gap-4 mt-4">
                        <button
                            onClick={handleStart}
                            className="bg-primary-bright text-black px-6 py-2 rounded-lg font-medium hover:opacity-90 transition"
                        >
                            Start Game
                        </button>
                        <button
                            onClick={handleCancel}
                            className="bg-gray-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-600 transition"
                        >
                            Cancel Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartGame;