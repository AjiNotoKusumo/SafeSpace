import { useState } from "react";
import axios from 'axios'
import MediumButton from "../components/MediumButton";
import { Navigate, useNavigate } from "react-router";
import notification from "../helpers/notification";
import logo from '../assets/SafeSpaceLogo.png';

export default function Login() {
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    async function handleLogin(event) {
      event.preventDefault()
      try {
        const {data} = await axios.post('https://gc1.rookiedev.online/login', {email, password})

        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', email)

        navigate("/lodgings")
        notification('Login success', 'success')

      } catch (error) {
        console.log(error.response.data.message);
        notification(error.response.data.message, 'error')
        
      }
    }

    if(localStorage.access_token) {
      notification(`You're already logged in`, 'success')

      return (
        <>
          <Navigate to="/lodgings" />
        </>
      )
    }

    return (
        <>
            {/* Login Section */}
              <section className="container" id="login-section">
                <div className="row">
                  <div className="col-12 text-center d-flex flex-column align-items-center justify-content-center">
                    <img src={logo} width="400px" className="mb-3 mt-5"/>
                    <span>
                      Log in to create, edit, or delete Lodgings.
                    </span>
                  </div>
                  <div className="col-12 col-lg-8 offset-lg-2 my-5">
                    <div className="row">
                      <div className="col-12 col-md-6 border-end p-5 text-left">
                        <img
                          src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D"
                          width="350px"
                          alt="sofa"
                        />
                      </div>
                      <div className="col-12 col-md-6 p-5 text-left">
                        <div className="form-signin m-auto">
                          <form id="login-form" onSubmit={handleLogin}>
                            <h1 className="h3 mb-3 display-1">Log in to your account</h1>
                            <span>
                              Log in on your profile as staff or admin to adjust lodgings.
                            </span>
                            <div className="mb-3 mt-3">
                              <div className="d-flex justify-content-between">
                                <label htmlFor="login-email">Email</label>
                                <label className="text-danger text-end fw-bold">*</label>
                              </div>
                              <input
                                type="email"
                                className="form-control"
                                id="login-email"
                                placeholder="Enter email address ..."
                                autoComplete="off"
                                required=""
                                onChange={(event) => {setEmail(event.target.value)}}
                              />
                            </div>
                            <div className="mb-4">
                              <div className="d-flex justify-content-between">
                                <label htmlFor="login-password">Password</label>
                                <label className="text-danger text-end fw-bold">*</label>
                              </div>
                              <input
                                type="password"
                                className="form-control"
                                id="login-password"
                                placeholder="Enter your password ..."
                                autoComplete="off"
                                required=""
                                onChange={(event) => {setPassword(event.target.value)}}
                              />
                            </div>
    
                            <MediumButton tag={'Log In'}/>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* End Login Section */}
        </>
    )
}