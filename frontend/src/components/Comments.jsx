import React, { useEffect, useState } from 'react';
import api from '../baseURL';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await api.get('/comments', {
                    headers: {
                        'pl-access-token': localStorage.getItem('token')
                    }
                });
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };
        fetchComments();
    }, []);

    return (
        <div className="comments">
            <h1>My Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.user.name}:</strong> {comment.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Comments;
