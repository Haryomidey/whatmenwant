import { useLocation, useNavigate } from "react-router-dom";
import { Home, TrendingUp, Gamepad2, User, Wallet } from "lucide-react";

const MobileNav = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const tabs = [
        { name: "Home", icon: Home, path: "/dashboard" },
        { name: "Trade", icon: TrendingUp, path: "/trades" },
        { name: "Game", icon: Gamepad2, path: "/game/play-game" },
        { name: "Profile", icon: User, path: "/profile" },
        { name: "Wallet", icon: Wallet, path: "/wallet" },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-neutral-900 border-t border-gray-800 flex justify-around items-center py-2 sm:hidden z-50">
            {tabs.map(({ name, icon: Icon, path }) => {
                const active = pathname === path;
                return (
                    <button
                        key={name}
                        onClick={() => navigate(path)}
                        className={`flex flex-col items-center text-xs ${
                            active ? "text-primary-bright" : "text-gray-400"
                        }`}
                    >
                        <Icon size={20} strokeWidth={active ? 2.5 : 1.5} />
                        <span className="text-[11px] mt-1">{name}</span>
                    </button>
                );
            })}
        </div>
    );
};

export default MobileNav;