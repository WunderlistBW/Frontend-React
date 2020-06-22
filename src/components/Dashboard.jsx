import React, {useState, useEffect} from 'react';

import axiosWithAuth from '../utils/axiosWithAuth'; 


const Dashboard = () => {

// what state do we need to store here? 
    // 1. taskList

// what functions do we need to build/use here?
    // 1.

// axios request to get user task lists - set to state 
useEffect(() => {
    axiosWithAuth()
    .get()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err); 
    })
})

    return (
        <>

        {/* render task list component - could build it directly here - but thinking we should pop it out and build it in it's own component */}

        {/* render task form component */}
        
        </>
    ) 
}


export default Dashboard