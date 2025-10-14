import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/home"
import AuthLayout from "../layout/AuthLayout"
import Login from "../pages/login"
import Register from "../pages/register"
import VerifyOtp from "../pages/verify-otp"
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../pages/dashboard"
import Trades from "../pages/dashboard/trades"
import Profile from "../pages/dashboard/profile"
import Wallet from "../pages/dashboard/wallet"
import P2PTrade from "../pages/dashboard/p2p-trade"
import P2PHistory from "../pages/dashboard/p2p-history"
import P2PAds from "../pages/dashboard/p2p-ads"
import GameHistory from "../pages/dashboard/game-history"
import GameAds from "../pages/dashboard/game-ads"
import PlayGame from "../pages/dashboard/play-game"
import GameOrder from "../pages/dashboard/game-order"
import StartGame from "../pages/dashboard/start-game"
import OngoingGame from "../pages/dashboard/ongoing-game"

const router = createBrowserRouter([
    {
        path: '',
        element: <Home />
    },
    {
        path: '',
        element: <AuthLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/verify-otp',
                element: <VerifyOtp />
            },
        ]
    },
    {
        path: '',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/trades',
                element: <Trades />
            },
            {
                path: '/p2p/trade',
                element: <P2PTrade />
            },
            {
                path: '/p2p/history',
                element: <P2PHistory />
            },
            {
                path: '/p2p/ads',
                element: <P2PAds />
            },
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/game/history',
                element: <GameHistory />
            },
            {
                path: '/game/ads',
                element: <GameAds />
            },
            {
                path: '/game/play-game',
                element: <PlayGame />
            },
            {
                path: '/game-order',
                element: <GameOrder />
            },
            {
                path: '/start-game',
                element: <StartGame />
            },
            {
                path: '/ongoing-game',
                element: <OngoingGame />
            },
            {
                path: '/wallet',
                element: <Wallet />
            },
        ]
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App;