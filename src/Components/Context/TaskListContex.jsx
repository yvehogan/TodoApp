import React, { createContext, useState } from 'react';
import { v1 as uuid } from "uuid";

export const TaskListContex = createContext()

const TaskListContexProvider = props => {
    const [tasks, setTasks] = useState([])
    const [editItem, setEditItem] = useState(null)

    const addTask = (title, category, dateCreated) => {
        setTasks([...tasks, { title, category, dateCreated, id: uuid() }])
    }

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const findEditItem = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    }

    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

        setTasks(newTasks)
        setEditItem(null)
    }

    return (
        <TaskListContex.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                findEditItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskListContex.Provider>
    )
}

export default TaskListContexProvider;