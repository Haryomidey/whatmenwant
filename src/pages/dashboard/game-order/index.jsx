import { useState } from "react";
import { images } from "../../../assets/images";
import { useNavigate } from "react-router-dom";

const GameOrder = ({ game = "Chess Arena" }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        gameId: "",
        username: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Game: ${game}\nGame ID: ${formData.gameId}\nUsername: ${formData.username}`);
    };

    const handleStartGame = () => {
        navigate('/start-game')
    }

    return (
        <div className="min-h-screen bg-[#040404] text-white py-6 grid grid-cols-2 gap-10 px-6 items-center">
            <div className="w-full flex items-center justify-center mb-8 md:mb-0 h-full max-h-[550px]">
                <img
                    src={images.gameOrder}
                    alt="Gaming illustration"
                    className="h-full w-full rounded-2xl object-cover shadow-lg"
                />
            </div>

            <div className="w-full bg-[#1A1A1A] p-8 rounded-2xl shadow-xl max-h-[400px]">
                <h2 className="text-2xl font-semibold mb-6">
                    Your <span className="text-primary-bright">{game}</span> Info
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Game ID</label>
                        <input
                            type="text"
                            name="gameId"
                            value={formData.gameId}
                            onChange={handleChange}
                            placeholder="Enter your game ID"
                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-bright transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Game Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your game username"
                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-bright transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary-bright text-black py-2.5 rounded-lg font-medium hover:opacity-90 transition"
                        onClick={handleStartGame}
                    >
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GameOrder;