import axios from 'axios';

const baseUrl = "http://localhost/api/";

const Logger = (username, password) => {
    return axios.post(baseUrl + "login", {
        username,
        password,
    })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("token", JSON.stringify(response.data.token));
            }
            return response;
        });
};

const Logout = () => {
    localStorage.removeItem("token");
};


export {
    Logger,
    Logout
};