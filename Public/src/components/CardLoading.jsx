export default function CardLoading() {
    return (
        <>
            <div
            className="flex flex-col md:flex-row h-auto md:h-40 overflow-hidden rounded-xl
                        border border-gray-200 bg-white shadow-sm animate-pulse"
            >
                {/* Image skeleton */}
                <div className="w-full h-48 shimmer md:h-full md:w-56 bg-gray-200 rounded-t-xl md:rounded-l-xl md:rounded-tr-none" />

                {/* Content skeleton */}
                <div className="flex flex-col justify-between p-4 flex-1 gap-3">
                    <div className="space-y-2">
                    <div className="h-3 w-24 bg-gray-200 rounded shimmer" />
                    <div className="h-4 w-3/4 bg-gray-200 rounded shimmer" />
                    <div className="h-3 w-full bg-gray-200 rounded shimmer" />
                    <div className="h-3 w-5/6 bg-gray-200 rounded shimmer" />
                    </div>

                    <div className="h-4 w-32 bg-gray-200 rounded shimmer" />
                </div>
            </div>
        </>
    )
}