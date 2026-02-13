export default function DetailLoading() {
    return (
        <>
            <main>
                {/* HERO SKELETON */}
                <section className="relative w-full h-[420px] overflow-hidden">

                    <div className="absolute inset-0 bg-gray-300 animate-pulse" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />

                    <div className="relative z-10 flex items-end h-full px-4 pb-10 mx-auto max-w-7xl">
                    <div className="space-y-3 w-full max-w-md animate-fade-in">
                        <div className="h-3 w-24 bg-gray-400/70 rounded shimmer" />
                        <div className="h-8 w-3/4 bg-gray-300 rounded shimmer" />
                    </div>
                    </div>
                </section>

                {/* CONTENT SKELETON */}
                <section className="px-4 py-12 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* LEFT */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* INFO CARD */}
                        <div className="rounded-xl border border-indigo-900 bg-white p-5 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                            {[1, 2].map((i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-gray-300 rounded-full shimmer" />
                                <div className="space-y-2">
                                <div className="h-3 w-20 bg-gray-300 rounded shimmer" />
                                <div className="h-3 w-32 bg-gray-200 rounded shimmer" />
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

                        {/* FACILITY */}
                        <div className="space-y-3 animate-pulse">
                        <div className="h-5 w-24 bg-gray-300 rounded shimmer" />
                        <div className="h-3 w-full bg-gray-200 rounded shimmer" />
                        <div className="h-3 w-5/6 bg-gray-200 rounded shimmer" />
                        </div>

                        {/* TYPE */}
                        <div className="space-y-3 animate-pulse">
                        <div className="h-5 w-16 bg-gray-300 rounded shimmer" />
                        <div className="h-3 w-32 bg-gray-200 rounded shimmer" />
                        </div>
                    </div>

                    {/* RIGHT / PRICE */}
                    <div className="lg:sticky lg:top-28 h-fit">
                        <div className="rounded-xl border border-indigo-900 bg-white p-6 shadow-md space-y-5">
                        
                        <div className="space-y-2">
                            <div className="h-3 w-16 bg-gray-300 rounded shimmer" />
                            <div className="h-7 w-32 bg-gray-300 rounded shimmer" />
                        </div>

                        <div className="h-11 w-full bg-indigo-300/60 rounded-lg shimmer" />

                        <div className="h-3 w-32 bg-gray-200 rounded shimmer mx-auto" />
                        </div>
                    </div>

                    </div>
                </section>
            </main>
        </>
    )
}