import { useState } from "react"
import React from 'react'
import Header from './Header'
import style from './style.module.css'
import Tasks from './Tasks'
import AddTask from './AddTask'
 
export default function App() {
    
    const [tasks,settasks]=useState([
        {
        id:1,
        text:'Breakfast',
        day:'At 8am',
      
    },
        {
        id:2,
        text:'Lunch',
        day:'At 1.30pm',
       
    },
        {
        id:3,
        text:'Dinner',
        day:'At 10pm',
        
    },
    ])

    //Add task
    const addTask = (task) =>{
        const id = Math.floor(Math.random()*10000)+1
        const newTask = { id, ...task}
        settasks([...tasks,newTask])

    }
    
    //Delete Task
    const deleteTask=(id)=>{
        settasks(tasks.filter((task)=> task.id!==id))
        
    }
  
    //Edit Task
    const editTask=(id)=>{
        const showTask = tasks.find((task)=>task.id===id)
        settoggleSubmit(false)
        setText(showTask.text)
        setDay(showTask.day)
        console.log(id)
       
        
    } 

  
    return (
        <div className={style.container}>
            <Header />
            <AddTask onAdd={addTask} />
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />):('No Task')
            }
            
        </div>
    )
}
