import { useEffect, useState } from "react"
import axios from 'axios'
import baseUrl from "../constants/baseUrl"
import gifLoading from '../assets/gifLoading.svg'

export default function Types() {
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(false)
    
    async function fetchTypes() {
        try {
            setLoading(true)
            const {data} = await axios.get(`${baseUrl}/types`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })

            setTypes(data?.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTypes()
    }, [])

    return (
        <>
            {/* Category Section */}
            <section
                className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                id="category-section"
            >
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="display-2">Types</h1>
                </div>
                <div className="row">
                    {loading ? (
                        <div className="d-flex justify-content-center mt-1">
                            <img src={gifLoading} width="7%" />
                        </div>
                    ) : (
                        <div className="col-12">
                            <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                </tr>
                            </thead>
                            <tbody id="table-category">
                                {types.map((type) => {
                                    return (
                                        <tr>
                                            <td scope="row">#{type.id}</td>
                                            <td className="fw-bold">{type.name}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            </table>
                        </div>
                    )}

                
                </div>
            </section>
            {/* End Category Section */}
        </>
    )
}