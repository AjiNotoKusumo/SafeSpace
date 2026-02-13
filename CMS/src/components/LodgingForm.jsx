import { useEffect, useState } from "react";
import MediumButton from "../components/MediumButton";
import axios from 'axios'
import baseUrl from "../constants/baseUrl"
import { useNavigate } from "react-router";
import notification from "../helpers/notification";
import gifLoading from '../assets/gifLoading.svg'

export default function LodgingForm({id}) {
    const navigate = useNavigate()
    const [lodging, setLodging] = useState({
        name: "",
        facility: "",
        roomCapacity: "",
        imgUrl: "",
        location: "",
        price: "",
        typeId: ""
    })
    const [types, setTypes] = useState([])
    const [loading, setLoading] = useState(false)
    
    async function fetchTypes() {
        try {
            const {data} = await axios.get(`${baseUrl}/types`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })

            setTypes(data.data)
        } catch (error) {
            console.log(error);
        }
    }

    async function fetchLodging() {
        try {
            setLoading(true)
            const {data} = await axios.get(`${baseUrl}/lodgings/${id}`, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })

            const {name, facility, roomCapacity, imgUrl, location, price, typeId} = data?.data

            setLodging({name, facility, roomCapacity, imgUrl, location, price, typeId})
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    function getFormData(description, event) {
        let value = event.target.value

        if(description === 'roomCapacity' || description === 'price' || description === 'typeId') {
            value = (value === "0" || value === "")? "" : Number(value)
        }

        setLodging((prevData) => {
            return {
                ...prevData,
                [description]: value
            }
        })

    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            let axiosData = {}

            if(!id) {
                const {data} = await axios.post(`${baseUrl}/lodgings`, lodging, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem('access_token')}`
                    }
                })
                axiosData = data
            } else {
                const {data} = await axios.put(`${baseUrl}/lodgings/${id}`, lodging, {
                    headers: {
                        Authorization: `bearer ${localStorage.getItem('access_token')}`
                    }
                })
                axiosData = data
            }
            
            navigate('/lodgings')

            notification(axiosData.message, 'success')

        } catch (error) {
            console.log(error.response.data.message);
            notification(error.response.data.message, 'error')
            
        }
    }

    useEffect(() => {
        fetchTypes()

        if(id) {
            fetchLodging()
        }
    }, [])
    


    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center mt-1">
                    <img src={gifLoading} width="7%" />
                </div>
            ) : (
                <div className="row">
                    <div className="col-12 col-md-6">
                        <form id="lodging-form" onSubmit={(event) => handleSubmit(event)}>
                        <div className="mb-3">
                            <label htmlFor="lodging-name">
                            Name <span className="text-danger fw-bold">*</span>
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="lodging-name"
                            placeholder="Enter lodging name"
                            autoComplete="off"
                            required=""
                            value={lodging.name}
                            onChange={(event) => {getFormData('name', event)}}
                            />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="lodging-types">
                                    Types <span className="text-danger fw-bold">*</span>
                                    </label>
                                    <select
                                    id="lodging-types"
                                    className="form-select"
                                    required=""
                                    value={lodging.typeId}
                                    onChange={(event) => {getFormData('typeId', event)}}
                                    >
                                    <option value="" selected="" disabled="">
                                        -- Select Types --
                                    </option>
                                    {types.map((type) => {
                                        return (
                                            <option value={type.id}>{type.name}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="lodging-location">
                                    Location <span className="text-danger fw-bold">*</span>
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="lodging-location"
                                    placeholder="Enter lodging location"
                                    autoComplete="off"
                                    required=""
                                    value={lodging.location}
                                    onChange={(event) => {getFormData('location', event)}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lodging-facilities">
                            Facilities <span className="text-danger fw-bold">*</span>
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="lodging-facilities"
                            placeholder="Enter lodging facilities"
                            autoComplete="off"
                            required=""
                            value={lodging.facility}
                            onChange={(event) => {getFormData('facility', event)}}
                            />
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lodging-capacity">
                                Capacity <span className="text-danger fw-bold">*</span>
                                </label>
                                <input
                                type="number"
                                min={0}
                                className="form-control"
                                id="lodging-capacity"
                                placeholder="Enter lodging capacity"
                                autoComplete="off"
                                required=""
                                value={lodging.roomCapacity}
                                onChange={(event) => {getFormData('roomCapacity', event)}}
                                />
                            </div>
                            </div>
                            <div className="col-12 col-md-6">
                            <div className="mb-3">
                                <label htmlFor="lodging-price">
                                Price <span className="text-danger fw-bold">*</span>
                                </label>
                                <input
                                type="number"
                                min={0}
                                className="form-control"
                                id="lodging-price"
                                placeholder="Enter lodging price"
                                autoComplete="off"
                                required=""
                                value={lodging.price}
                                onChange={(event) => {getFormData('price', event)}}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lodging-image">Image</label>
                            <input
                            type="text"
                            className="form-control"
                            id="lodging-image"
                            placeholder="Enter lodging image url"
                            autoComplete="off"
                            value={lodging.imgUrl}
                            onChange={(event) => {getFormData('imgUrl', event)}}
                            />
                        </div>
                        <div className="row mt-5 mb-3">
                            <div className="col-6">
                            <MediumButton tag={'Cancel'}/>
                            </div>
                            <div className="col-6">
                            <MediumButton tag={'Submit'}/>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            )}

            
        </>
    )
}