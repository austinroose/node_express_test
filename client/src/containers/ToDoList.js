import React, { useState, useEffect} from "react";
import {
    Grid,
    Typography,
    TextField
} from "@material-ui/core"
import io from "socket.io-client";
import URLs from '../routing/URLs';

const ToDoList = (props) => {
    const [todos, setTodos] = useState([])

    async function todosChange () {
        const socket = io(`${URLs.socketURL}/socket`)

        socket.on("newTodo", (todo) => {
            setTodos(...todos, todo)
        })

        socket.on("deletedTodo", (id) => {
            todos.filter(todo => {
                todo.id !== id
            })
        })
    }

    useEffect(() => {
        todosChange()
    })

    return (
        <div></div>
    )
}

export default ToDoList;