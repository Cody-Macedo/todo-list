import './App.css';
import Header from "./components/Header";
import ListTodos from "./components/ListTodos";
import {useEffect, useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {

        const fetchTodos = async () => {
            const res = await fetch('http://localhost:5000/tasks')
            const data = await res.json()
            console.log(data)
            setTasks(data)
        }

        fetchTodos()

    }, [])


    //méthode qui permet de faire la suppression d'une task
    const handleDelete = (id) => {
        // console.log(id);

        deleteTask(id);

        const tasksFiltered = tasks.filter((task) => task.id !== id)
        setTasks(tasksFiltered)
    }

    const deleteTask = (id) => {
        const fetchDelete = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
            const data = await res.json()
            console.log(data)
        }
        fetchDelete()
    }

    const handleToggleReminder = (id) => {

        // pour chaque task  dans tasks, si l'id tu task que je parcours
        // c'est l'id que je souhaite modifier
        // alors tu me renvois une copie de la task actuel (spread operator)
        // par contre la valeur de sa propriété reminder tu lui affectes l'inverse de sa valeur actuelle
        // sinon (pour les tasks sur lesquels je n'ai pas double cliqué)
        // tu me les retourne sans les modifier

        const taskModified = tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task);
        setTasks(taskModified);
        tasks.map((task) => task.id === id ? reminderTask(task) : task)
        // const tasksFiltered = tasks.filter((task) => task.id === id)
        // setTasks(tasksFiltered)
    }

    const reminderTask = (task) => {

        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(task)
        };
        const fetchPut = async () => {
            const res = await fetch(`http://localhost:5000/tasks/${task.id}`, requestOptions);
            const data = await res.json()
            console.log(data)
        }
        fetchPut()
    }

    const handleAddTask = (task) => {

        // const id = Math.floor(Math.random * 10000) + 1;
        // const newTask = {id, ...task}

        addTask(task)
    }

    const addTask = (task) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }

        const fetchAddTask = async () => {
            const res = await fetch('http://localhost:5000/tasks/', requestOptions);
            const data = await res.json()
            setTasks([...tasks, data])
            console.log(data)
        }
        fetchAddTask()
    }

    const handleToggleAdd = () => {
        setShow(!show)
    }

    return (
        <div className="App">
            <div className="container">
                <Header/* title="ToDo List"*/ color={show ? "red" : "green"} text={show ? "Fermer" : "Ajouter"}
                                              toggleAdd={handleToggleAdd}/>
                {show && <AddTask onAdd={handleAddTask}/>}
                {tasks.length > 0 ?
                    <ListTodos toggleReminder={handleToggleReminder} tasks={tasks} onClick={handleDelete}/> :
                    <p>empty</p>}
            </div>
        </div>
    );
}


export default App;
