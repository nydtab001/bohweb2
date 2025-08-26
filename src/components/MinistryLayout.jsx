
export default function MinistryLayout({ image, director, children }) {
    return (
        <>
            <div
            className="flex flex-col gap-8 md:flex-row items-center justify-between mb-8 border-b-2 border-gray-300 pb-10">
                <img src={image} alt="Ministry Logo" className="h-auto w-full max-w-[280px] object-cover" />
                <div className="flex items-top gap-2">
                    {/* <img src={director.photo || "/default-avatar.png"} alt={director.name} className="w-16 h-16 rounded-full" /> */}
                    <div>
                        <p className="font-semibold max-sm:text-3xl mb-1 text-5xl">Director</p>
                        <p className="text-2xl text-gray-500">{director.name}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-2xl font-bold mb-6">About the Ministry</h1>
                {children}
            </div>
        </>
    );
}