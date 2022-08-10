// NESSE COMPONENTE VAMOS USAR O AXIOS PARA FAZER A REQUISIÇÃO DA API
// npm install axios

// FAZENDO O IMPORT DO AXIOS
import axios from 'axios';

// CRIANDO A INSTÂNCIA AXIOS
// PASSANDO A URL DA API QUE IREMOS RETORNAR(MAZE.TV)
const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=breaking%20bad'
});

// EXPORT DO COMPONENTE SEM ESTADO
export default api;