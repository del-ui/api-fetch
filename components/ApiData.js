import axios from 'axios';

export  {fetchData}() {
  return axios.get('https://api.example.com/data')
    .then(response => response.data)
    .catch(error => console.error(error));
}
