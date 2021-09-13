import { get } from 'http';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { ITask } from './interface';
import TodoTask from './TodoTask';

const Home: React.FC = () => { 

    const [name,setName] = useState<string>("")
    const [task,setTask] = useState<string>("")
    const [deadline,setDeadline] = useState<number>(0)
    const [todoList,setTodoList] = useState<ITask[]>([])

    useEffect (()=> {
        localStorage.setItem("taskInfo",JSON.stringify(todoList)) 
    },[todoList])
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>):void => {
        
            if(event.target.name === "name"){
                setName(event.target.value)
            }else if(event.target.name === "task"){
                setTask(event.target.value)
            }else{
                setDeadline(Number(event.target.value))
            }
    }

    const addTask = ():void => {

        const newTask = {name :name, taskName: task, deadline: deadline};
        if(!todoList){
        } 
        else{
            setTodoList([...todoList,newTask])
            setName("")
            setTask("")
            setDeadline(0)
        }
        // setTodoList([...todoList,newTask])
        //  let info = JSON.stringify(newTask)
        //  localStorage.setItem("taskInfo",info)
    }
      
    const deleteTask = (taskDelete: string):void => {
        setTodoList(todoList.filter((task)=> {
            return task.taskName != taskDelete
        }))
    }
    
    const getData = ():void => {
    
        var getData = localStorage.getItem('taskInfo') || '{}'
        var show = JSON.parse(getData)
        console.log(show);
        
        // if (getData){
        //     return JSON.parse(localStorage.getItem('taskInfo') || '{}')
        // }
        // else{
           
        // }

    }
    
    return (
        <div className="App">

            <div className="header">

                <h1>Todo List</h1>

                <div className="inputdata">
                    <input type="text"  value= {name} placeholder="Enter name..." name="name" onChange={handleChange}/>
                    {/* <br></br> */}
                    <input type="text" value= {task} placeholder="Enter task..." name="task" onChange={handleChange}/>
                    {/* <br></br> */}
                    <input type="number" value= {deadline} placeholder="Deadline..." name="deadline" onChange={handleChange}/>
                </div>
          

                <div>
                    <button onClick={addTask}>Add Task</button>
                </div>

                <div>
                    <button onClick={getData}>GetData</button>
                </div>

            </div>
           
            <div className="todolist">
                {   
                    todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task} todoDelete={deleteTask}/>
                })}
            </div>
        </div>
    );
}

export default Home;