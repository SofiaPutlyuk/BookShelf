import { removeBook } from "../redux/action"
import { editBook } from "../redux/action"
import { toggleBook } from "../redux/action"
import { useDispatch } from "react-redux"
export const BookList = ({book}) => {
    const dispatch = useDispatch()
    return(
     <ul>
        {book.map(elem => (
            <li key={elem.id}>
                <p>Name: {elem.name}</p>
                <p>Author: {elem.author}</p>
                <p>Year: {elem.year}</p>
                <img src={elem.photo} alt={elem.name}/>
                <button onClick={() => dispatch(removeBook(elem.id)) }>Remove</button>
                <input type="text" onChange={(event) => dispatch(editBook(elem.id , {name:event.target.value})) } />
                <input type="checkbox"  checked={elem.completed} onChange={() => dispatch(toggleBook(elem.id))}/>
            </li>
        ))}
     </ul>
    )
}