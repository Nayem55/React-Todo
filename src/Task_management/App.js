import {useState} from "react"
import React from 'react'
import Header from './Header'
import './custom_styles.css'
import Tasks from './Tasks'
import AddTask from './AddTask'

export default function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Breakfast',
            day: 'At 8am',
        },
        {
            id: 2,
            text: 'Lunch',
            day: 'At 1.30pm',
        },
        {
            id: 3,
            text: 'Dinner',
            day: 'At 10pm',
        },
    ])

    const [selectedTask, setSelectedTask] = useState({})

    //Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Edit Task
    const editTask = (id) => {
        const showTask = tasks.find((task) => task.id === id)
        console.log(showTask)
        setSelectedTask(showTask);
    }

    const onEditCompleted = (id, text, day) => {

        const newTasks = tasks.map(function (e) {
                return e.id === id ?
                    {id, text, day} : e
            }
        )

        setTasks(newTasks)
        setSelectedTask({})
    }

    return (
        <div className="container">
            <Header/>
            <AddTask onEdit={onEditCompleted} selectedTask={selectedTask} onAdd={addTask}/>
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask}/> : ('No Task')}
        </div>
    )
}
