import { Routes, BrowserRouter, Route } from "react-router"
import DetailPage from "./views/DetailPage"
import BaseLayout from "./views/BaseLayout"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<BaseLayout/>}>
            <Route path="/lodging/:id" element={<DetailPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>

  )
}

export default App
