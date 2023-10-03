import { useState } from "react"
import BackButton from "../components/BackButton"
import Spinner from "../components/Spinner"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const DeleteBooks = () => {
  const [loading, setLoading] = useState(false)
  const nav = useNavigate()
  const { id } = useParams()
  
  const handleDeleteBooks = () => {
    setLoading(true)
    axios.delete(`https://book-store-backend-swart.vercel.app/books/${id}`).then(() => {
      setLoading(false)
      nav('/')
    })
    .catch((error) => {
      setLoading(false)
      alert('An Error Happened. Please Check Console')
      console.log(error);
    })
  }

  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 py-4 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Delete </span> Book.</h1>
      {loading ? <Spinner/> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl"> Are you sure you want to delete this book? </h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full"
        onClick={handleDeleteBooks}> Yes, Delete It</button>
      </div>
    </div>
  )
}

export default DeleteBooks