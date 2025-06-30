import axios from "./customize-axios";

const fetchtAllUser = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`, {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
    });
}

export { fetchtAllUser }