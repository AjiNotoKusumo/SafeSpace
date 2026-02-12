export default function MediumButton({tag}) {
    return (
        <>
            <button
                className={`btn btn-lg rounded-pill w-100 p-2 ${(tag === 'Cancel') ? 'btn-light' : 'btn-primary'}`}
                type={(tag === 'Cancel') ? 'button' : 'submit'}
            >
                {tag}
            </button>
        </>
    )
}