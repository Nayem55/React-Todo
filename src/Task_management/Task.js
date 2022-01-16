import style from './style.module.css'
import { FaTimes }from 'react-icons/fa'
import { BiEdit }from 'react-icons/bi'
const Task = ({task, onDelete,onEdit}) => {
    return (
        <div className={style.task} >
            <h3>{task.text} 
            <div style={{display:'flex'}}>
            <BiEdit style={{color:'rgb(74, 236, 33)' }} onClick={()=>onEdit(task.id) }/> 
            
            <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=>onDelete(task.id)} /> 
            </div> 
            

             </h3>

            <p>{task.day}</p>
        </div>
    )
} 

export default Task
 

//{"style.task ${task.reminder ? 'style.reminder' : '' } "}