import { useParams } from "react-router";
import LodgingForm from "../components/LodgingForm";


export default function EditLodging() {
    const {id} = useParams()

    return (
        <>
            {/* Edit Lodging Section */}
            <section
                className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                id="new-product-section"
            >
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="display-2">Edit Lodging</h1>
                </div>
                <LodgingForm id={id}/>
            </section>
            {/* End Edit Lodging Section */}
        </>
    )
}