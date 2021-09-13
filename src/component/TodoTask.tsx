import React from "react";
import { ITask } from "./interface";

interface props {
    task: ITask;
    todoDelete(taskDelete: string): void 
}

const TodoTask = ({task,todoDelete}: props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.name} </span>
                <span>{task.taskName} </span>
                <span>{task.deadline} </span>
            </div>
            {/* <br></br> */}
            <div className="delete">
            <button onClick={()=> {todoDelete(task.taskName)}}> Delete</button>
            </div>
        </div>
    )
}

export default TodoTask