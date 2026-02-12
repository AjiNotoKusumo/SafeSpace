import { Routes, BrowserRouter, Route } from "react-router"
import DetailPage from "./views/DetailPage"
import BaseLayout from "./views/BaseLayout"
import Home from "./views/Home"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/lodging/:id" element={<DetailPage/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
