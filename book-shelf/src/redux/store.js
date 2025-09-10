import {createStore} from "redux"
 const initialState = {
    books:[
        {id:0 , name:"Odyssey", author:"Homer", year:"8"  , photo:"https://cdn2.penguin.com.au/covers/400/9780241735657.jpg", completed:false}
    ],
    action:null
}
const reducer = (state = initialState ,action) => {
    switch(action.type){
        case "book/addBook":
           return {...state , books: [...state.books ,action.payload]};
        case "book/removeBook":
            return {...state , books:state.books.filter(b => b.id !== action.payload)}
        case "book/toggleBook":
            return {...state , books:state.books.map(b => b.id === action.payload ? {...b,completed : !b.completed} : b)}
        case "book/editBook":
            return {...state , books:state.books.map(b => b.id === action.payload.id ? {...b , ...action.payload.changes} : b)}
         default:
            return state;
        } 
}
export const store = createStore(reducer)