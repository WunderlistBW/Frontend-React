import React, {useState, useEffect} from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'; 

import TaskList from './TaskList'; 
import { TaskContext } from '../contexts/TaskContext'; 


const Dashboard = () => {

// what other slices of state do we need to store here? 

const [taskList, setTaskList] = useState([])


// axios request to get user's taskList - set to state 
useEffect(() => {
    axiosWithAuth()
    .get('/api/tasks')
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err); 
    })
})

    return (
        <>
        <TaskContext.Provider value={{ taskList }} >
         <TaskList />
        </TaskContext.Provider>

        {/* render TaskForm component */}
        
        </>
    ) 
}


export default Dashboard