import axios from "./customize-axios";

const fetchtAllUser = () => {
    return axios.get("https://reqres.in/api/users?page=2", {
        headers: {
            "x-api-key": "reqres-free-v1"
        },
    });
}

export { fetchtAllUser }