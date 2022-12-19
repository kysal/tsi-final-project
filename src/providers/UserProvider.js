import axios from "axios";

const UserProvider = {
    login: async function(userDetails) {
        const res = await axios.post('http://localhost:8080/user/authenticate', userDetails)

        if (res.status === 200) console.log("Success!");
        else console.error(res);
    },

    signup: function(userDetails) {

    }
}

export default UserProvider;