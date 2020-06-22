import axios from 'axios';

const axiosWithAuth = () => {
// getting token from localstorage
const token = window.localStorage.getItem('token');

return axios.create({

    headers: {
      authorization: token
    },
    baseURL: 'https://wunderlist-api-2020.herokuapp.com', 
    
}); 
}

export default axiosWithAuth