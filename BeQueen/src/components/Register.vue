<script>
import BtnAddToCartV2 from '@/components/BtnAddToCartV2.vue';
import { useAuthStore } from '@/stores/authentification';

export default {
    components: {BtnAddToCartV2},
    name:'register',
    data() {
        return{
            store: useAuthStore(),
            post: {},
            name: '',
            firstName: '',
            email: '',
            password: '',
        }
    },

}
</script>

<template>
 <main>
        <form @submit.prevent="store.register(this.name, this.firstName, this.email, store.encryptPassword(this.password))" action="post" class="formAuth">
            <h2>Inscrivez-vous</h2>
            <div v-if="store.validMsg == 'inscription reussie'" class="true">{{  store.validMsg }}</div>
            <div v-if="store.errorMsg == 'inscription failed'" class="false">{{  store.errorMsg }}</div>
            <div class="inputDiv">
                <input v-model="name" placeholder="Nom"/>
                <input v-model="firstName" placeholder="Prénom"/>
                <input v-model="email" placeholder="E-mail"/>
                <input type="password" v-model="password" placeholder="Mot de passe"/>
                <!-- <input type="password" v-model="passwordConfirm" placeholder="Confirmer le mot de passe" required/> -->
            </div>
            <BtnAddToCartV2  txtBtn="Crée un compte" type="submit" class="BtnSubmit"/>
            <RouterLink to="/auth" class="newCompte"><p>Déjà inscrit ?</p></RouterLink>
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
    padding-bottom: 5%;
    margin-right: 5%;
    margin-left: 5%;
    border-radius: 15px;
    height: fit-content;
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
</style>