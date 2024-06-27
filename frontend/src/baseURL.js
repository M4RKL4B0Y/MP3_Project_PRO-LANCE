import axios from 'axios';

const api = axios.create({
    baseURL: 'http://prolance-env.eba-npewa8kd.us-east-1.elasticbeanstalk.com/api' 
});

export default api;
