import { nanoid } from "nanoid"
export const addBook = (name, author, year, photo) => ({
    type: "book/addBook",
    payload: {
        id: nanoid(),
        name,
        year,
        author,
        photo

    }
})
export const removeBook = id => ({
    type: "book/removeBook",
    payload: id
})
export const toggleBook = id => ({
    type: "book/toggleBook",
    payload: id
})
export const editBook = (id, changes) => ({
    type: "book/editBook",
    payload: { changes, id }
})