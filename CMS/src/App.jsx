import { BrowserRouter, Routes, Route } from "react-router";
import AddLodging from "./views/AddLodging"
import AddUser from "./views/AddUser"
import EditLodging from "./views/EditLodging"
import Lodgings from "./views/Lodgings"
import Login from "./views/Login"
import Types from "./views/Types"
import Update from "./views/Update"
import BaseLayout from "./views/BaseLayout";
import { useState } from "react";


function App() {
  const [email, setEmail] = useState('')

  return (
    <>
      {/* Preloader */}
      <div id="preloader" style={{ display: "none" }}>
        <div className="loading">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_remmdtqv.json"
            background="transparent"
            speed={1}
            style={{ width: 300, height: 300 }}
            loop=""
            autoPlay=""
          />
        </div>
      </div>
      {/* End Preloader */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login email={email} setEmail={setEmail}/>} />
          <Route element={<BaseLayout email={email}/>}>
            <Route path="/lodgings" element={<Lodgings />} index/>
            <Route path="/create" element={<AddLodging />} />
            <Route path="/edit/:id" element={<EditLodging />} />
            <Route path="/update" element={<Update />} />
            <Route path="/types" element={<Types />} />
            <Route path="/register" element={<AddUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>

  )
}

export default App
