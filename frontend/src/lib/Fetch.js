import axios from 'axios'
import {navigate} from "./History";

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    UPDATE: 'update',
    DELETE: 'delete'
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

const  request = async (method, url, data) => {
    try {
        let config = {
            method,
            url,
            ...data
        }

        const result = await axiosInstance(config)

        return result.data
    }
    catch(e) {
        if(e.response) {
            if(e.response.status === 404) {
                console.log("로그인이 만료되었습니다.");
                navigate('/')
            }
        }
    }
}

const FetchJson = {
    get: (url, data) => {
        return request(FetchConsts.GET, url, {params: data})
    },
    post: (url, data) => {
        return request(FetchConsts.POST, url, {data})
    },
    put: (url, data) => {
        return request(FetchConsts.PUT, url, {data})
    },
    delete: (url) => {
        return request(FetchConsts.DELETE, url)
    },
}

export default FetchJson
