import { addBook } from "../redux/action";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux";
import { BookList } from "./BookList";
export const BookForm = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)
    const [name , setName] = useState("")
    const [author , setAuthor] = useState("")
    const [year , setYear] = useState("")
    const [photo , setPhoto] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addBook(name,author,year , photo))
        setName("")
        setAuthor("")
        setYear("")
        setPhoto("")
        console.log(name)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" value={author} placeholder="Author" onChange={ (e) => setAuthor(e.target.value)}/>
            <input type="text" value={year} placeholder="Year" onChange={(e) => setYear(e.target.value)}/>
            <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Link to photo from google"/>
          {photo && (
            <img src={photo} alt={name} />
          )}
            <button>Add</button>
        </form>
        <BookList book={books}/>
        </>
    )
}