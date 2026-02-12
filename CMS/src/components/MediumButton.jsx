import { useNavigate } from "react-router"

export default function MediumButton({tag}) {
    const navigate = useNavigate()

    function handleCancel() {
        navigate('/lodgings')
    }

    return (
        <>
            <button
                className={`btn btn-lg rounded-pill w-100 p-2 ${(tag === 'Cancel') ? 'btn-light' : 'btn-primary'}`}
                type={(tag === 'Cancel') ? 'button' : 'submit'}
                onClick={(tag === 'Cancel') ? handleCancel : null}
            >
                {tag}
            </button>
        </>
    )
}