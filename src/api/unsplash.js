import axios from 'axios'

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
            'Client-ID hNvGkLas3FkUdr0XaOrKdiauc7zY1UVGXGCemqhPxkk'
    }
});