import {FaTimes} from 'react-icons/fa'

const Task = ({task, onClick, toggleReminder}) => {


    return (
        <div className={`task ${task.reminder ? '' : 'reminder'}`} onDoubleClick={() => {toggleReminder(task.id) }} >
            <h3>{task.text} <FaTimes onClick={() => {onClick(task.id) }} style={{color: "red", cursor: "pointer"}}/></h3>
            <h4>{task.day}</h4>
        </div>
    )
}
export default Task