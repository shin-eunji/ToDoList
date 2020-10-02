import FetchJson from '../lib/Fetch'

const API = {
    getTodos: () => FetchJson.get('/todo'),
    addTodo: (data) => FetchJson.post('/todo', data),
    deleteTodo: (id) => FetchJson.get('/todo/:id',),
}

export default API