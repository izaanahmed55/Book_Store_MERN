import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateBooks from "./pages/CreateBooks"
import ShowBooks from "./pages/ShowBooks"
import EditBooks from "./pages/EditBooks"
import DeleteBooks from "./pages/DeleteBooks"
// import Sidebar from "./components/Sidebar"

const App = () => {
  return (
    <>
    {/* <Sidebar/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/create" element={<CreateBooks/>} />
      <Route path="/books/details/:id" element={<ShowBooks/>} />
      <Route path="/books/edit/:id" element={<EditBooks/>} />
      <Route path="/books/delete/:id" element={<DeleteBooks/>} />
    </Routes>
    </>
  )
}

export default App