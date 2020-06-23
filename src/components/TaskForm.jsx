import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

function TaskForm() {
    const [formState, setFormState] = useState({
        name: "",
        dueDate: null,
        isRecurring: false,
        days: null,
        isComplete: false,
    });

    const [modalIsOpen, setModalIsOpen] = useState(false);

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
            .post("https://reqres.in/api/users", formState)
            .then((res) => {
                setPost(res.data); // get just the form data from the REST api
                console.log("success", post);
                // reset form if successful
                setFormState({
                    name: "",
                    dueDate: "",
                    isRecurring: false,
                    days: null,
                });
                setModalIsOpen(false);
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <div className='TaskForm'>
            <button onClick={() => setModalIsOpen(true)}>Create Task</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                shouldCloseOnOverlayClick={false}
            >
                <form onSubmit={formSubmit}>
                    <label htmlFor='name'>
                        Task Name
                        <input
                            type='text'
                            name='name'
                            value={formState.name}
                            onChange={inputChange}
                        />
                    </label>
                    <label htmlFor='isRecurring'>
                        Recurring
                        <input
                            type='checkbox'
                            name='isRecurring'
                            value={formState.isRecurring}
                            onChange={inputChange}
                        />
                    </label>
                    <label htmlFor='days'>
                        <select name='days' id='days' onChange={inputChange}>
                            <option value='0'>Sundays</option>
                            <option value='1'>Mondays</option>
                            <option value='2'>Tuesdays</option>
                            <option value='3'>Wednesdays</option>
                            <option value='4'>Thursdays</option>
                            <option value='5'>Fridays</option>
                            <option value='6'>Saturdays</option>
                        </select>
                    </label>

                    <label htmlFor='dueDate'>
                        Due Date
                        <input
                            type='date'
                            name='dueDate'
                            value={formState.dueDate || ""}
                            onChange={inputChange}
                        />
                    </label>

                    <button>Create Task</button>
                </form>
            </Modal>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </div>
    );
}

export default TaskForm;
