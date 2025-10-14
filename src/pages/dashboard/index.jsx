import { Wallet2, Gamepad2, Coins, ChartLine } from "lucide-react";
import OngoingGames from "./components/OngoingGames";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const router = useNavigate();

    return (
        <div className="flex text-[#EFEFEF] min-h-screen bg-[#040404]">
            <div className="mt-[50px] w-full px-4 sm:px-6 md:px-10">
                <p className="text-[12px] text-center sm:text-left text-[#AFAFAF] uppercase tracking-wide">
                    Your Cumulative Wallet Balance
                </p>

                <div className="flex items-center justify-center sm:justify-start mt-5">
                    <span className="font-medium text-[16px] text-gray-300">
                        USDT
                    </span>
                    <span className="text-[30px] font-semibold ml-2">0.00</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                    <div
                        onClick={() => router("/wallet")}
                        className="bg-[#1E1E1E] rounded-xl p-5 cursor-pointer hover:bg-[#262626] transition-all duration-200 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-[15px] font-semibold">Wallets</h3>
                            <Wallet2 className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-[#888888] text-[12px] mt-2 leading-snug">
                            You can store your crypto assets in the wallets allocated to you.
                        </p>
                    </div>

                    <div
                        onClick={() => router("/game/play-game")}
                        className="bg-[#1E1E1E] rounded-xl p-5 cursor-pointer hover:bg-[#262626] transition-all duration-200 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-[15px] font-semibold">P2P Gaming</h3>
                            <Gamepad2 className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-[#888888] text-[12px] mt-2 leading-snug">
                            Play games with people online and earn rewards.
                        </p>
                    </div>

                    <div
                        onClick={() => router("/trades")}
                        className="bg-[#1E1E1E] rounded-xl p-5 cursor-pointer hover:bg-[#262626] transition-all duration-200 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-[15px] font-semibold">Crypto to NGN</h3>
                            <Coins className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-[#888888] text-[12px] mt-2 leading-snug">
                            Convert your crypto assets to NGN with ease.
                        </p>
                    </div>

                    <div
                        onClick={() => router("/p2p/trade")}
                        className="bg-[#1E1E1E] rounded-xl p-5 cursor-pointer hover:bg-[#262626] transition-all duration-200 flex flex-col justify-between"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-[15px] font-semibold">Trade P2P</h3>
                            <ChartLine className="w-5 h-5 text-gray-400" />
                        </div>
                        <p className="text-[#888888] text-[12px] mt-2 leading-snug">
                            Trade safely with our verified merchants.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <OngoingGames />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;