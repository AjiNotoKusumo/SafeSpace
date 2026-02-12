export default function LargeButton({tag}) {
    return (
        <>
            <button
                className="btn btn-lg btn-primary rounded-pill w-100 p-2 mt-3"
                type="submit"
            >
            {tag}
            </button>
        </>
    )
} 