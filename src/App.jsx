import { useEffect, useState } from "react";
import AddTask from "./component/AddTask/AddTask";
import TaskList from "./component/AddTask/TaskList.jsx";
import Header from "./component/AddTask/Header";


function App() {
  const [taskList, setTaskList] = useState(localStorage.getItem("taskList") ? JSON.parse(localStorage.getItem("taskList")):[]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList))
  },[taskList]);
  return (
    
    <div className="App">
      {isOpen ? (<AddTask setTaskList={setTaskList} setIsOpen={setIsOpen}/>) : (<Header isOpen={isOpen} setIsOpen={setIsOpen}/>)}
      <TaskList taskList={taskList} setTaskList={setTaskList}></TaskList>
    </div>
  );
}

export default App;
