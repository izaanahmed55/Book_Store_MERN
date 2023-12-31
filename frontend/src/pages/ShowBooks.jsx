import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton"
import Spinner from '../components/Spinner'

const ShowBooks = () => {
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    setLoading(true)
    axios
    .get(`https://book-store-backend-swart.vercel.app/books/${id}`)
    .then((res) => {
      setBook(res.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })

  }, [])
  
  return (
  <div className="p-4">
    <BackButton/>
    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 py-4 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Show </span> Book.</h1>
    {loading ? (
      <Spinner/>
    ) : (
      <div className="flex flex-col border-2 border-sky-400 rounded-xl">
        <div className="my-4">
          <span className="text-xl m-4 text-gray-500"> Title </span>
          <span> {book.title} </span>
        </div>
        <div className="my-4">
          <span className="text-xl m-4 text-gray-500"> Author </span>
          <span> {book.author} </span>
        </div>
        <div className="my-4">
          <span className="text-xl m-4 text-gray-500"> Publish Year </span>
          <span> {book.publishYear} </span>
        </div>
        <div className="my-4">
          <span className="text-xl m-4 text-gray-500"> Create Time </span>
          <span> {new Date(book.createdAt).toString()} </span>
        </div>
        <div className="my-4">
          <span className="text-xl m-4 text-gray-500"> Last Update Time </span>
          <span> {new Date(book.updatedAt).toString()} </span>
        </div>
      </div>
    )}
  </div>
  )
}

export default ShowBooks
