import { Outlet } from "react-router-dom";
import Image from "../components/Image";
import { images } from "../assets/images";
import ScrollToTop from "../components/ScrollToTop";

const AuthLayout = () => {
    return (
        <main className="h-screen w-full flex flex-col md:flex-row">
            <ScrollToTop />
            <aside className="hidden md:flex md:w-1/2 h-full bg-primary-dark text-white flex-col justify-center items-center p-10">
                <div className="max-w-md text-center space-y-6">
                    <div className="flex justify-center">
                        <Image
                            src={images.logo}
                            alt="FastPoint Logo"
                            width={80}
                            height={80}
                            className="rounded-lg"
                        />
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-4xl font-bold">Welcome to FastPoint</h1>
                        <p className="text-lg opacity-90 leading-relaxed">
                            FastPoint is your ultimate gaming and trading platform
                            where gamers meet to play, trade, and earn
                            rewards effortlessly.
                        </p>
                    </div>
                </div>
            </aside>

            <section className="w-full md:w-1/2 h-full flex items-center justify-center bg-black p-4">
                <div className="w-full max-w-md space-y-6 h-full overflow-y-scroll scrollbar-none">
                    <Outlet />
                </div>
            </section>
        </main>
    );
};

export default AuthLayout;