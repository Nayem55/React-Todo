import {useEffect, useState} from 'react';
import './custom_styles.css'

const AddTask = ({onAdd, onEdit, task}) => {
    const editMode = Object.keys(task).length !== 0

    const [text, setText] = useState(editMode ? task.text : '')
    const [day, setDay] = useState(editMode ? task.day : '')
    const [toggleSubmit, setToggleSubmit] = useState(true)

    useEffect(()=>{
        if (editMode){
            setText(task.text);
            setDay(task.day);
        }
    }, [task])

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        if (editMode) onEdit(task.id, text, day)
        else onAdd({text, day})

        setText('')
        setDay('')
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
                    <input type='submit' value='Edit Task' className="btn btnblock"/>
            }
        </form>
    )
}
export default AddTask;