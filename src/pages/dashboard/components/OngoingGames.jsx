import React from "react";

const OngoingGames = () => {
    const ongoingGames = [
        {
            id: "1",
            game: { name: "FIFA 25", key: "pes" },
            players: [
                { nickname: "AceGamer" },
                { nickname: "CryptoChamp" },
            ],
            stakeAmount: 50,
            status: "accepted",
            startedAt: "2025-10-13T18:32:00Z",
            type: "PES",
        },
        {
            id: "2",
            game: { name: "Chess Royale", key: "chess" },
            players: [
                { nickname: "QueenMaster" },
                { nickname: "CheckmatePro" },
            ],
            stakeAmount: 25,
            status: "accepted",
            startedAt: "2025-10-13T18:45:00Z",
            type: "Chess",
        },
        {
            id: "3",
            game: { name: "Call of Duty", key: "cod" },
            players: [
                { nickname: "SniperKing" },
                { nickname: "NoScope" },
            ],
            stakeAmount: 100,
            status: "accepted",
            startedAt: "2025-10-13T19:12:00Z",
            type: "COD",
        },
    ];

    return (
        <div className="mt-12">
            <p className="text-[15px] text-center sm:text-left mb-6">
                Ongoing Games - Live Matches
            </p>

            <div className="flex justify-between border-b border-[#232323] pb-3 text-[#AFAFAF] text-[13px] font-medium">
                <p>Game</p>
                <p className="flex-1 text-center">Players</p>
                <p className="text-right">Stake</p>
            </div>

            {ongoingGames.map((match) => (
                <div
                    key={match.id}
                    className="flex justify-between items-center bg-[#070707] mt-4 py-4 px-3 rounded-lg"
                >
                    <div>
                        <p className="font-medium">{match.game.name}</p>
                        <p className="text-[11px] text-gray-500">
                            {match.type} — {match.status}
                        </p>
                    </div>

                    <div className="flex-1 text-center">
                        <p>
                            {match.players[0].nickname} vs {match.players[1].nickname}
                        </p>
                    </div>

                    <div className="text-right">
                        <p className="font-semibold text-[#10B348]">
                            {match.stakeAmount} USDT
                        </p>
                        <p className="text-[11px] text-gray-500">
                            {new Date(match.startedAt).toLocaleTimeString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OngoingGames;