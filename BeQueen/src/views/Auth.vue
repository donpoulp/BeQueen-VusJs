<script>
import BtnAddToCartV2 from '@/components/BtnAddToCartV2.vue';
import { useAuthStore } from '@/stores/authentification';


export default{
    components: {BtnAddToCartV2},
    name: 'auth',
    data() {
        return{
            post: {},
            username: '',
            password: '',
            store: useAuthStore(),

        }
    },
}
</script>

<template>
    <main>
        <form @submit.prevent="store.connection(this.username, store.encryptPassword(this.password))" action="post" class="formAuth">
            <h2>Connectez-vous</h2>
            <div v-if="store.validMsg == 'connection reussie'" class="true">{{  store.validMsg }}</div>
            <div v-if="store.errorMsg == 'connection failed'" class="false">{{  store.errorMsg }}</div>
            <div class="inputDiv">
            <input v-model="username" placeholder="Identifiant" required/>
            <input type="password" v-model="password" placeholder="Mot de passe" required/>
            </div>
            <BtnAddToCartV2  txtBtn="Se Connecter" type="submit" class="BtnSubmit"/>
            <RouterLink to="/register" class="newCompte"><p>Crée un compte</p></RouterLink>
        </form>
        
    </main>
</template>

<style>
main{
    height: auto;
}
.formAuth{
    margin-top: 15vh;
    margin-bottom: 10vh;
    margin-right: 5%;
    margin-left: 5%;
    border-radius: 15px;
    height: 45vh;
    background-color: #373737;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.formAuth h2{
    font-family: "MuseoModerno", sans-serif;
    font-weight: 200;
}
.inputDiv{
    margin-top: 10%;
    width: 90%;
    display: flex;
    flex-direction: column;
}
.inputDiv input{
    border-radius: 5px;
    height: 40px;
    margin-bottom: 5%;
    text-align: center;
    background-color: #D9D9D9;
    font-size: 1rem;
    color: black;
}
.BtnSubmit{
    margin-top: 5%;
    margin-left: 40%;
}
.newCompte{
    color: white;
    margin-top: 5%;
    margin-right: 50%;
    text-decoration:underline!important;
}
.true{
    color: green;
    text-align: center;
}
.false{
    color: red;
    text-align: center;
}
</style>