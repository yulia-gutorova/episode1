import "./App.css";
import { useState } from "react";
import { Task } from "./Task";
import { Tasks } from "./Tasks";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


//----------------------------------------------
  const clearInput = () =>{
    setNewTask("");
  }

//----------------------------------------------
  const addTask = () => {
    let input = document.querySelector('input');

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: input.value,
      completed: 0,
    };
    
    console.log(input);
    input.value='';
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList); 
  };


//----------------------------------------------
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

//----------------------------------------------
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) 
        {
            if(task.completed ===0){return { ...task, completed: 1 };}
            else {return { ...task, completed: 0 };}         
        } 
        
        else {
          return task;
        }
      })
    );
  };

//----------------------------------------------
  const problemTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) 
        {
          if(task.completed === 0 || task.completed === 1){return { ...task, completed: 2 };}
          else {return { ...task, completed: 0 };}   
        } 
        else 
        {
          return task;
        }
      })
    );
  };

//----------------------------------------------
  return (
    <div className="App">

      <div className="addTask">
        <div>
          <h1>Please, add your tasks here:</h1>
        </div>

        <div>
          <input/>
          <button onClick={addTask}> Add Task</button>
          {/* <button onClick={clearInput}> Clear</button>  */}
        </div>

      </div>

      <div>
        {todoList.length !== 0 && 
        <div>
          <h1>Your tasks</h1>
          <hr/>
        </div>

        }
      </div>

      <div className="list"  style={{ backgroundColor: todoList.length !== 0 ? "rgb(219, 217, 217)" : "white" }}>

          {todoList.map((task) => 
        {
          return (
            <>
              <Task
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
                problemTask={problemTask}
              />
            </>
          );
        })}


      </div>
    </div>
  );


  
}


export default App;