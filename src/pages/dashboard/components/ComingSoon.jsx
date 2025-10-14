import { Clock } from "lucide-react";

const ComingSoon = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-[#0f0f0f] p-6">
            <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-green-500/20 rounded-full animate-pulse">
                    <Clock size={48} className="text-primary-bright" />
                </div>

                <h1 className="text-4xl font-bold tracking-wide">
                    Coming Soon
                </h1>

                <p className="text-gray-300 max-w-md">
                    We're working hard to bring you this feature.  
                    Stay tuned - it'll be worth the wait!
                </p>

                <div className="mt-6">
                    <span className="inline-block px-6 py-2 text-sm font-medium text-black bg-primary-dark rounded-full shadow-md">
                        In Development
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;