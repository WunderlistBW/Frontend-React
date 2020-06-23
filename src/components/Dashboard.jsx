import React, {useState, useEffect} from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'; 

import TaskList from './TaskList'; 
import { TaskContext } from '../contexts/TaskContext'; 


const Dashboard = () => {

// what other slices of state do we need to store here? 

const [taskList, setTaskList] = useState([])
const [refresh, setRefresh] = useState(true)


// axios request to get user's taskList - set to state 
useEffect(() => {
    axiosWithAuth()
    .get('/api/tasks')
    .then(res => {
        console.log(res);
        // add setTaskList
    })
    .catch(err => {
        console.log(err); 
    })
    .finally(setRefresh(false))
}, [refresh])

    return (
        <>
        <h1>Your Tasks</h1>
        <TaskContext.Provider value={{ taskList, setRefresh }} >
         <TaskList />
        </TaskContext.Provider>

        {/* render TaskForm component */}
        
        </>
    ) 
}


export default Dashboard