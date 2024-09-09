import { ref} from 'vue'
import { defineStore} from 'pinia'
import axios from 'axios';
import bcrypt from 'bcryptjs';

export const useAuthStore = defineStore("auth", () => {
    const tokenTransition = ref();
    const token = ref();
    let validMsg = ref();
    let errorMsg = ref();
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const encryptPassword = (password) => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }          
    
    const connection = (userUsername, userPassword) => {
        axios
        .post('http://127.0.0.1:8000/api/login', {
            email: userUsername,
            password: userPassword
        })
         .then(dataT => (tokenTransition.value = dataT.data))
         .then(data => (token.value = tokenTransition.value.access_token))
         .then(log => console.log(token.value))
         .then(()=> validMsg.value = 'connection reussie')
         .catch(() => errorMsg.value = 'connection failed')

         sleep(3000).then(()=> { location.reload() })  
    };

    const register = (userName, userFirstName, userEmail, userPassword) => {
        axios
        .post("http://127.0.0.1:8000/api/register", {
            first_name: userFirstName,
            last_name: userName,
            email: userEmail,
            password: userPassword
        })
        .then(dataT => (tokenTransition.value = dataT.data))
        .then(data => (token.value = tokenTransition.value.access_token))
        .then(log => console.log(token.value))
        .then(()=> validMsg.value = 'inscription reussie')
        .catch(() => errorMsg.value = 'inscription failed')

        sleep(3000).then(()=> { location.reload() })
    };

    return { token, connection, register, encryptPassword, validMsg, errorMsg};
});