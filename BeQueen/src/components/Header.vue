<script>
import {useCartStore} from '../stores/cart'
import { storeToRefs } from "pinia";

export default {
    name: "header",
    data(){
        return{
            store: useCartStore()
        }
    }
}
</script>


<template>
    <section id="header">
        <RouterLink to="/"><img class="logo" src="../assets/images/logoBeQueen.png" alt="Logo BeQueen"></RouterLink>
        <div class="rightSideHeader">
            <div v-if="store.cartItems.length>0" class="incrementCart">{{ store.cartItems.length }}</div>
            <RouterLink to="/cart"><img src="../assets/images/logoPanier.svg" alt="Icon Panier"></RouterLink>
            <RouterLink to="/burgerMenu"><img class="burgerMenu" src="../assets/images/menuBurger.svg" alt="Icon Menu Burger"></RouterLink>
        </div>
    </section>
</template>


<style scoped>
#header{
    height: 15vh;
    background-color: #379777;
    opacity: 88%;
    display: flex;
    flex-direction: row;
}
.logo{
    margin-top: 3%;
    margin-left: 3%;
    height: 150%;
}
.rightSideHeader{
    margin-left: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.burgerMenu{
    margin-right: 0;
}
.incrementCart{
    background-color: #E1DFDC;
    height: 3px;
    width: 3px;
    padding: 2%;
    border-radius: 100%;
    border: black 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    margin-top: -20px;
    margin-left: -40px;
    font-size: 0.9rem;
}
</style>
