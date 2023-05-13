//Axios instance

import axios from 'axios'

const client = axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? "http://127.0.0.1:5001/gomoku-77118/us-central1/" : "https://us-central1-gomoku-77118.cloudfunctions.net/"
})

export default client;