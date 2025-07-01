import axios from "./customize-axios";

const fetchtAllUser = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`, {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
    });
}

const postUser = (name, job) => {
    return axios.post("https://reqres.in/api/users", {
        name,
        job
    }, {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
    });
}

const updateUser = (id, name, job) => {
    return axios.put(`https://reqres.in/api/users/${id}`, {
        name,
        job
    }, {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
    });
}

export { fetchtAllUser, postUser, updateUser }