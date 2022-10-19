import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";
import AddTask from "./component/AddTask";
import Footer from "./component/Footer";
import About from "./component/About";

function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTask]= useState([{
    id:1,
    text: "Eat",
    reminder: true

},
{
    id:2,
    text: "Sleep",
    reminder: true
}
])
//Add Task
const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000)+1
    const newTask={id, ...task}
    setTask([...tasks, newTask])
}

//Reminder
const toggleReminder=(id)=>{
  setTask(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder}: task))
}

//delete
const deleteTask=(id)=>{
  setTask(tasks.filter((task)=>task.id!==id))
}
  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={()=>setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      <Footer />
    </div>
  );
}

export default App;
