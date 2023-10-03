import { useEffect, useState } from "react"
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom"

const EditBooks = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState('')
  const { id } = useParams();
  const nav = useNavigate()
  
  useEffect(()=> {
    setLoading(true)
    axios.get(`https://book-store-backend-swart.vercel.app/books/${id}`).then((res) => {
      setAuthor(res.data.author)
      setPublishYear(res.data.publishYear)
      setTitle(res.data.title)
      setLoading(false) 
    }).catch((error) => {
      setLoading(false)
      alert('An Error Happened. Please Check Console')
      console.log(error);
    })
  },[])

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true)
    axios.put(`https://book-store-backend-swart.vercel.app/books/${id}`, data)
    .then(() => {
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
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 py-4 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Edit </span> Book.</h1>
      {loading ? (
        <Spinner/>
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4text-gray-500"> Title </label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4text-gray-500"> Author </label>
            <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4text-gray-500"> Publish Year </label>
            <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
            Save
          </button>
        </div>
      )}
    </div>
  )
}

export default EditBooks
