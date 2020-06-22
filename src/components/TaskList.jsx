import React, { useContext, useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'; 

import { TaskContext } from '../contexts/TaskContext';  


const TaskList = () => {

    // need to add mark as complete functionality + clear completed functionality 

    const { taskList } = useContext(TaskContext); 


    const deleteTask = (e, task) => {
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/tasks/${task.id}`) 
        .then(res => { 
          console.log(res);  
        })
        .catch(err => {
          console.log(err); 
        })
    }
    

    // see bubbles sprint for model - need to add editing state +  

    const handleUpdate = (e, task) => {
        e.preventDefault(); 
        axiosWithAuth()
            .put(`/api/tasks/${task.id}`,  ) //need to add item to be updated in here 
            .then(res => {
                console.log(res);
            }) 
            .catch(err => {
                console.log(err); 
            })
        }

    return (
        <>
        {
            taskList.map(task => {

            // build this out after looking at structure of data
            // button invoking deleteTask 
            // button routing to UpdateTask 

                return <div> 

                <button onClick={deleteTask}> Delete </button>

                <button onClick={handleUpdate}> Update</button> 

                </div>
               
            })
        }
        
        </>
    )
}


export default TaskList 