import FetchJson from '../lib/Fetch'

const API = {
    getTodos: () => FetchJson.get('/todo'),
    addTodo: (data) => FetchJson.post('/todo', data),
    getTodoById: (id) => FetchJson.get(`/todo/${id}`),
    updateTodo: (data, id) => FetchJson.put(`/todo/${id}`, data),
    deleteTodo: (id) => FetchJson.delete(`/todo/${id}`,),
}

export default API