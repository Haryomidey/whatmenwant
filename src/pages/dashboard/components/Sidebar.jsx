import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Home,
    ChevronUp,
    User,
    Wallet,
    Gamepad2,
    ChevronDown,
    TrendingUp,
    Repeat,
    LogOut,
} from "lucide-react";
import { images } from "../../../assets/images";

const Sidebar = () => {
    const [openMenus, setOpenMenus] = useState({
        p2p: false,
        game: false,
    });

    const navigate = useNavigate();

    const toggleMenu = (menu) => {
        setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <aside className="w-full h-screen overflow-y-scroll scrollbar-none bg-neutral-900 text-white flex flex-col justify-between p-5 border-r border-gray-800">
            <div>
                <div className="flex items-center justify-center w-full">
                    <img src={images.logo} />
                </div>

                <nav className="flex flex-col space-y-2 mt-6 gap-3">
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                    >
                        <Home size={20} />
                        <span>Home</span>
                    </Link>

                    <Link
                        to="/trades"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                    >
                        <TrendingUp size={20} />
                        <span>Trades</span>
                    </Link>

                    <div>
                        <button
                            onClick={() => toggleMenu("p2p")}
                            className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                        >
                            <span className="flex items-center gap-3">
                                <Repeat size={20} />
                                P2P
                            </span>
                            {openMenus.p2p ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {openMenus.p2p && (
                            <div className="ml-10 mt-2 flex flex-col gap-2 space-y-1 text-gray-300">
                                <Link
                                    to="/p2p/trade"
                                    className="hover:text-primary-bright transition"
                                >
                                    Trade P2P
                                </Link>
                                <Link
                                    to="/p2p/history"
                                    className="hover:text-primary-bright transition"
                                >
                                    P2P History
                                </Link>
                                <Link
                                    to="/p2p/ads"
                                    className="hover:text-primary-bright transition"
                                >
                                    P2P Ads
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/profile"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                    >
                        <User size={20} />
                        <span>Profile</span>
                    </Link>

                    <div>
                        <button
                            onClick={() => toggleMenu("game")}
                            className="w-full flex items-center justify-between px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                        >
                            <span className="flex items-center gap-3">
                                <Gamepad2 size={20} />
                                Game
                            </span>
                            {openMenus.game ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        {openMenus.game && (
                            <div className="ml-10 mt-2 flex flex-col gap-2 space-y-1 text-gray-300">
                                <Link
                                    to="/game/play-game"
                                    className="hover:text-primary-bright transition"
                                >
                                    Play Game
                                </Link>
                                <Link
                                    to="/game/history"
                                    className="hover:text-primary-bright transition"
                                >
                                    Game History
                                </Link>
                                <Link
                                    to="/game/ads"
                                    className="hover:text-primary-bright transition"
                                >
                                    Game Ads
                                </Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/wallet"
                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-neutral-800 transition"
                    >
                        <Wallet size={20} />
                        <span>Wallet</span>
                    </Link>
                </nav>
            </div>

            <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-400/20 text-red-300 font-medium transition"
            >
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </aside>
    );
};

export default Sidebar;