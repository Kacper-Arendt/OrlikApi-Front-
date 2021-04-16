import axios from 'axios';

const  baseUrl = "http://localhost/api/";

const login = (username, password) => {
     return axios.post(baseUrl+ "login", {
            username,
            password,
        })
        .then ((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data.token));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};


export   {
    login,
    logout
};