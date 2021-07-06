import Task from "./Task";

const ListTodos = ({tasks, onClick, toggleReminder}) => {

    return (
        <div>
            {tasks.map((task) => <Task toggleReminder={toggleReminder} onClick={onClick} key={task.id} task={task}/>)}
        </div>
    );

}
export default ListTodos;