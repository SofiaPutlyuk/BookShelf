import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { statusBook } from "./types";
export const ActionApp = () => {
    const dispatch = useDispatch()
    const action = useSelector(state => state.action)
  const setAction = (type)=> {
    dispatch({action:"action/setAction" , payload:type})
  }
    return(
        <div>
            <button onClick={setAction(statusBook.ADD_TASK)} aria-pressed={action === statusBook.ADD_TASK}>Add</button>
            <button onClick={setAction(statusBook.REMOVE_BOOK)} aria-pressed={action === statusBook.REMOVE_BOOK}>Remove</button>
            <button onClick={setAction(statusBook.TOGGLEBOOK)} aria-pressed={action === statusBook.TOGGLEBOOK}>Toggle</button>
            <button onClick={setAction(statusBook.EDIT)} aria-pressed={action === statusBook.EDIT}>Edit</button>
        </div>
    )
}