import {useState, useEffect} from "react"
import axios from 'axios'
import Spinner from "../components/Spinner"
import { Link } from "react-router-dom"
import {AiOutlineEdit} from 'react-icons/ai'
import { BsInfoCircle } from "react-icons/bs"
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import Sidebar from "../components/Sidebar"

const Home = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('https://book-store-backend-swart.vercel.app/books')
    .then((res) => {
      console.log(res)
      setBooks(res.data.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setLoading(false)
    })
  },[])

  return (
    <div className="p-4">
      {loading ? (
        <Spinner/>
      ) : (
        <>
        <div className="flex">
        <div> <Sidebar/></div>
        <div className="w-[100%] relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 py-4 dark:text-white md:text-5xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 pl-4">Book </span>List.</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className="text-sky-800 text-4xl"/>
        </Link>
      </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Sr #
                </th>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Author
                </th>
                <th scope="col" className="px-6 py-3">
                    Publish Year
                </th>
                <th scope="col" className="px-6 py-3">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
        {books.map((book, index) => (
                <tr key={book._id} className="bg-white text-center border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className=" px-6 py-4"> {index + 1} </td>
                  <td className="px-6 py-4"> {book.title} </td>
                  <td className="px-6 py-4"> {book.author} </td>
                  <td className="px-6 py-4"> {book.publishYear} </td>
                  <td className="rounded-md text-center"> 
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-xl text-green-800"/>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className='text-xl text-yellow-600'/>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-xl text-red-600" />
                      </Link>
                    </div> 
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
        </div>
        </div>
        </>
      )}
    </div>
  )
}

export default Home
