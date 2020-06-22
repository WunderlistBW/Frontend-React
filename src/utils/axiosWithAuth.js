import axios from 'axios';

const axiosWithAuth = () => {
// getting token from localstorage
const token = window.localStorage.getItem('token');

return axios.create({

    headers: {
      authorization: token
    },
    baseURL: 'http://localhost:5000', //change this once we have endpoints 
    
}); 
}

export default axiosWithAuth