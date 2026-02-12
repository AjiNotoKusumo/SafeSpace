import { useState } from "react";
import LargeButton from "../components/LargeButton";
import { useNavigate } from "react-router";
import axios from 'axios'
import baseUrl from "../constants/baseUrl";
import notification from "../helpers/notification";

export default function AddUser() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    })

    function getFormData(description, event) {
        let value = event.target.value

        setUser((prevData) => {
            return {
                ...prevData,
                [description]: value
            }
        })

    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const {data} = await axios.post(`${baseUrl}/add-user`, user, {
                headers: {
                    Authorization: `bearer ${localStorage.getItem('access_token')}`
                }
            })

            navigate("/lodgings")
            notification(data.message, 'success')
        } catch (error) {
            console.log(error.response.data.message)
            notification(error.response.data.message, 'error')
        }
    }


    return (
        <>
            {/* New User Section */}
            <section
                className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
                id="new-user-section"
            >
                <div className="row">
                <div className="col-12 col-md-6">
                    <div className="pt-3 pb-2 mb-3 border-bottom">
                    <form id="register-form" onSubmit={handleSubmit}>
                        <h1 className="h3 mb-3 display-1">Register User</h1>
                        <div className="mb-3">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="register-email">Email</label>
                            <label className="text-danger text-end fw-bold">*</label>
                        </div>
                        <input
                            type="email"
                            className="form-control"
                            id="register-email"
                            placeholder="Enter email address ..."
                            autoComplete="off"
                            required=""
                            onChange={(event) => {getFormData('email', event)}}
                        />
                        </div>
                        <div className="mb-3">
                        <div className="d-flex justify-content-between">
                            <label htmlFor="register-password">Password</label>
                            <label className="text-danger text-end fw-bold">*</label>
                        </div>
                        <input
                            type="password"
                            className="form-control"
                            id="register-password"
                            placeholder="Enter password ..."
                            autoComplete="off"
                            required=""
                            onChange={(event) => {getFormData('password', event)}}
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="register-phone">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="register-phone"
                            placeholder="Enter phone number (optional) ..."
                            autoComplete="off"
                            onChange={(event) => {getFormData('phoneNumber', event)}}
                        />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="register-address">Address</label>
                        <textarea
                            id="register-address"
                            className="form-control"
                            rows={3}
                            placeholder="Enter address (optional) ..."
                            autoComplete="off"
                            defaultValue={""}
                            onChange={(event) => {getFormData('address', event)}}
                        />
                        </div>
                        <LargeButton tag={'Register'}/>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            {/* End New User Section */}
        </>
    )
}