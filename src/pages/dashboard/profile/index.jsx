import React from "react";
import { Info, HelpCircle, Users, Copy, Settings } from "lucide-react";

const Profile = () => {
    const user = {
        nickname: "samuser235764",
        fullName: "Samuel Chidozie",
        email: "creativefastpoint@games.com",
        phone: "+23490 382 708 49",
        uid: "772345GJT",
        accountCreated: "13-07-2027",
        kycVerified: false,
    };

    const stats = [
        { label: "Orders Completed", value: "84" },
        { label: "Avg Release Time", value: "10" },
        { label: "Total Trading Volume", value: "224" },
        { label: "Games Completed", value: "224" },
        { label: "Average Release Time", value: "224" },
        { label: "Total Gaming Volume", value: "224" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-6 mb-10 sm:mb-0">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Profile</h1>
                    <p className="bg-red-600 text-xs px-2 py-1 rounded">unverified</p>
                </div>
                <div>
                    
                </div>
            </div>

            <div className="bg-[#111111] rounded-xl p-4 md:p-6 shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center justify-center w-full md:w-1/4 bg-[#1a1a1a] rounded-lg p-6">
                        <div className="w-20 h-20 rounded-full border border-gray-700 flex items-center justify-center">
                            <Users size={40} className="text-gray-400" />
                        </div>
                        <p className="text-xs text-gray-400 mt-3">Account date of creation</p>
                        <p className="text-sm font-medium">{user.accountCreated}</p>
                        <div className="mt-3 text-center">
                            <p className="text-xs text-gray-400">UID</p>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-semibold">{user.uid}</span>
                                <Copy size={14} className="text-gray-400 cursor-pointer hover:text-white" />
                            </div>
                        </div>
                        <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-sm px-4 py-1 rounded transition">
                            Feedback
                        </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
                        {stats.map((item, index) => (
                            <div key={index} className="bg-[#1a1a1a] p-4 rounded-lg">
                                <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                                <p className="text-lg font-semibold">{item.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-[#111111] rounded-xl p-4 md:p-6 flex justify-between items-center">
                <div>
                    <p className="text-sm font-semibold">
                        {user.kycVerified ? (
                            <span className="text-primary-bright">KYC verified</span>
                        ) : (
                            <span className="text-red-400">KYC unverified</span>
                        )}
                    </p>
                    <p className="text-xs text-gray-400">
                        Verify your KYC to smooth transactions and payments.
                    </p>
                </div>
                {!user.kycVerified && (
                    <button className="text-primary-bright font-semibold flex items-center gap-1 hover:underline">
                        Verify KYC →
                    </button>
                )}
            </div>

            <div className="mt-6 space-y-4">
                <InfoRow label="Nickname" value={user.nickname} />
                <InfoRow label="FullName" value={user.fullName} />
                <InfoRow label="Email" value={user.email} />
                <InfoRow label="Phone Number" value={user.phone} />

                <div className="bg-[#111111] rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <HelpCircle size={18} />
                        <p>Help Centre</p>
                    </div>
                    <Info size={16} className="text-gray-400" />
                </div>

                <div className="bg-[#111111] rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Info size={18} />
                        <p>About Us</p>
                    </div>
                    <Settings size={16} className="text-gray-400" />
                </div>

                <div className="bg-[#111111] rounded-xl p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Users size={18} />
                        <p>Invite Friends</p>
                    </div>
                    <Settings size={16} className="text-gray-400" />
                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ label, value }) => (
    <div className="bg-[#111111] rounded-xl p-4">
        <p className="text-xs text-gray-400 mb-1">{label}</p>
        <input
            type="text"
            readOnly
            value={value}
            className="w-full bg-transparent border border-gray-700 text-sm rounded-lg px-3 py-2 text-gray-300 focus:outline-none cursor-default"
        />
    </div>
);

export default Profile;