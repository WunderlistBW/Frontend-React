
import React, {useState, useEffect} from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'; 
import TaskList from './TaskList'; 
import { TaskContext } from '../contexts/TaskContext'; 


import axiosWithAuth from "../utils/axiosWithAuth";

const Dashboard = () => {


const [taskList, setTaskList] = useState([])
const [refresh, setRefresh] = useState(true)

useEffect(() => {
    axiosWithAuth()
    .get('/api/tasks')
    .then(res => {
        console.log(res);
        setTaskList(res.data); //check on this once we have real data 
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
    );
};

export default Dashboard;
