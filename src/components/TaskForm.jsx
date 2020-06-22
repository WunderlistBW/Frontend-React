import React, { useState, useEffect } from "react";
import axios from "axios";

function TaskForm() {
    const [formState, setFormState] = useState({
        name: "",
        due_date: "",
        isRecurring: false,
        dayOfWeek: null,
    });

    const [post, setPost] = useState([]);

    const inputChange = (e) => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        };

        setFormState(newFormData);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        axios
            .post(
                "https://wunderlist-api-2020.herokuapp.com/api/tasks",
                formState,
            )
            .then((res) => {
                setPost(res.data); // get just the form data from the REST api
                console.log("success", post);
                // reset form if successful
                setFormState({
                    name: "",
                    due_date: "",
                    isRecurring: false,
                    dayOfWeek: null,
                });
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <div className='TaskForm'>
            <form onSubmit={formSubmit}>
                <label htmlFor='name'>
                    Name
                    <input
                        type='text'
                        name='name'
                        value={formState.name}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor='dueDate'>
                    Due Date
                    <input
                        type='date'
                        name='dueDate'
                        value={formState.due_date}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor='recurring'>
                    Recurring
                    <input
                        type='checkbox'
                        name='recurring'
                        value={formState.isRecurring}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor='dayOfWeek'>
                    Day of Week
                    <input
                        type='date'
                        name='dayOfWeek'
                        value={formState.dayOfWeek}
                        onChange={inputChange}
                    />
                </label>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default TaskForm;
