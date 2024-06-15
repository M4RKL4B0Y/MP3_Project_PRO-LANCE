import React, { useEffect, useState } from 'react';
import api from '../baseURL';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await api.get('/tasks', {
                    headers: {
                        'pl-access-token': localStorage.getItem('token')
                    }
                });
                setTasks(response.data);
            } catch (error) {
                console.error(error.response ? error.response.data : 'There was an error. Please contact support');
            }
        };
        fetchTasks();
    }, []);

    return (
        <div className='tasks'>
            <h1>My Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
