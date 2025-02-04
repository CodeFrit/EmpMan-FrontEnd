import CreateEmployee from './CreateEmployee';
import Emplist from './Emplist'
import Mynav from './Mynav'
import { BrowserRouter, Routes, Route } from "react-router";
import UpdateEmployee from './UpdateEmployee';
import Result from './Result';
function App() {

  return (
    <>
    <BrowserRouter>
    <Mynav />
      <Routes>
        <Route path="/" element={<Emplist />} />
        <Route path="/add-employee" element={<CreateEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        <Route path="/result/:ex" element={<Result />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
