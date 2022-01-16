import style from'./style.module.css'
import { useState } from 'react';

const AddTask = ({onAdd,onEdit}) => {
   
    const [text,setText]= useState('')
    const [day,setDay]= useState('')
    const [toggleSubmit,settoggleSubmit]=useState(true) 
   
  
   

const onSubmit =(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text , day})
      
        
       


        setText('')
        setDay('')
        
     
        
    }
  

    return (
        <form className={style.addform} onSubmit={onSubmit}>
            <div className={style.formcontrol}>
                <label>Tasks</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e)=>setText(e.target.value)} />

            </div>
            <div  className={style.formcontrol}>
                <label>Day & time</label>
                <input type='text' placeholder='Day & time'  value={day} onChange={(e)=>setDay(e.target.value)}/>

            </div>
           
        {
            toggleSubmit ? 
            <input type='submit' value='Save Task' className={style.btn , style.btnblock} />  : <input type='submit' value='Edit Task' className={style.btn , style.btnblock} />  


        }
            
        </form>
    )
}
export default AddTask;