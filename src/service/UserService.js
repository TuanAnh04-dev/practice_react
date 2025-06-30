import axios from "axios"

const fetchtAllUser = () => {
    return axios.get("http://localhost:8000/users");
}

export { fetchtAllUser }