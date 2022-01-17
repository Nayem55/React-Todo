import {useEffect, useState} from 'react';
import './custom_styles.css'

const AddTask = ({onAdd, onEdit, selectedTask}) => {
    const editMode = Object.keys(selectedTask).length !== 0

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [toggleSubmit, setToggleSubmit] = useState(true)

    useEffect(()=>{
        if (editMode){
            setText(selectedTask.text);
            setDay(selectedTask.day);
            setToggleSubmit(false)
        }
    }, [selectedTask])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        if (editMode) onEdit(selectedTask.id, text, day)
        else onAdd({text, day})

        setText('')
        setDay('')
        setToggleSubmit(true)
    }

    return (
        <form className="addform" onSubmit={onSubmit}>
            <div className="formcontrol">
                <label>Tasks</label>
                <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="formcontrol">
                <label>Day & time</label>
                <input type='text' placeholder='Day & time' value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            {
                toggleSubmit ?
                    <input type='submit' value='Save Task' className="btn btnblock"/> :
                    <input type='submit' value='Edit Task' className="btn btnblock" style={{backgroundColor:'red'}}/>
            }
        </form>
    )
}
export default AddTask;