import { useEffect, useState } from "react"
import axios from 'axios'
import currencyFormatter from "../helpers/formatCurrency"
import { NavLink } from "react-router"
import baseUrl from "../constants/baseUrl"

export default function Lodgings() {
    const [lodgings, setLodgings] = useState([])

    async function fetchLodgings() {
        try {
            const {data} = await axios.get(`${baseUrl}/lodgings`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })

            setLodgings(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete(id) {
        try {
            const {data} = await axios.delete(`${baseUrl}/lodgings/${id}`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })

            setLodgings((prevData) => prevData.filter(lodging => lodging.id !== id))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchLodgings()
    }, [])

    return (
        <>
            {/* Product Section */}
            <section
                className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                id="product-section"
            >
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="display-2">Lodgings</h1>
                <NavLink to="/create" className="btn btn-primary rounded-pill d-flex align-items-center justify-content-center" id="new-product">
                    <span className="fw-bold">+ </span> New Product
                </NavLink>
                </div>
                <div className="row">
                <div className="col-12 table-responsive">
                    <table className="table align-middle">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col" width="180px">
                            Image
                        </th>
                        <th scope="col" width="250px">
                            Facilities
                        </th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Author</th>
                        <th scope="col" width="50px" />
                        </tr>
                    </thead>
                    <tbody id="table-product">
                        {lodgings.map((lodging, index) => {
                            return (
                                <tr>
                                <td scope="row">#{index+1}</td>
                                <td className="fw-bold">{lodging.name}</td>
                                <td>
                                    <img
                                    src={lodging.imgUrl}
                                    className="img-fluid"
                                    />
                                </td>
                                <td>{lodging.facility}</td>
                                <td>{lodging.roomCapacity}</td>
                                <td className="fw-bold">{currencyFormatter(lodging.price)}</td>
                                <td>{lodging.User.email}</td>
                                <td>
                                    <span className="d-flex align-items-center justify-content-center">
                                    <button type="button" onClick={() => {handleDelete(lodging.id)}} className="ms-3 bg-transparent border-0">
                                        <span className="icon material-symbols-outlined text-danger">
                                        delete
                                        </span>
                                    </button>
                                    <NavLink to={`/edit/${lodging.id}`} className="ms-3">
                                        <span className="icon material-symbols-outlined text-danger">
                                        edit
                                        </span>
                                    </NavLink>
                                    <a href="" className="ms-3">
                                        <span className="icon material-symbols-outlined text-danger">
                                        image
                                        </span>
                                    </a>
                                    </span>
                                </td>
                                </tr>
                            )
                        })}
                        
                        
                    </tbody>
                    </table>
                </div>
                </div>
            </section>
            {/* End Product Section */}
        </>
    )
}