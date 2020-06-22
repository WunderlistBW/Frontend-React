import React, { useContext, useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'; 

import { TaskContext } from '../contexts/TaskContext';  


const TaskList = () => {

    // need to add mark as complete + clear completed functionality 
    // need to add search functionality 

    const { taskList, setRefresh } = useContext(TaskContext); 

    const [editing, setEditing] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState({}); // update this object with correct shape 
    
    const deleteTask = task => {
        axiosWithAuth()
        .delete(`/api/tasks/${task.id}`) 
        .then(res => { 
          console.log(res); 
          setRefresh(true);  
        })
        .catch(err => {
          console.log(err); 
        })
    }
    
    const editTask = task => {
        setEditing(true);
        setTaskToEdit(task);
      };


    const saveUpdate = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .put(`/api/tasks/${taskToEdit.id}`, taskToEdit  )
            .then(res => {
                console.log(res);
                setRefresh(true); 
            }) 
            .catch(err => {
                console.log(err); 
            })
        }

    return (
        <>
        {
            taskList.map(task => {

                return <div> 

                <button onClick={(e) => {e.preventDefault(); deleteTask(task)}}> Delete </button>

                <button onClick={() => {editTask(task)}}> Update </button> 

                {editing && (
                    <form onSubmit={saveUpdate}>
                        {/* use task form as model for this form - make sure to match shape of object used above for taskToEdit */}
                    </form> 
                )}

                </div>
               
            })
        }
        
        </>
    )
}


export default TaskList 