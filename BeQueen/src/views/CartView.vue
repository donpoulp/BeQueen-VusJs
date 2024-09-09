<script setup>
import BtnAddToCartV2 from '@/components/BtnAddToCartV2.vue';
import {useCartStore} from '../stores/cart'
import { storeToRefs } from "pinia";

const store = useCartStore();
const { removeItems, sortItems } = store;
const { cartItems } = storeToRefs(store);


    function formatPrice(value) {
        let val = (value/100).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")
    }
</script>

<template>
    <section class="cart">
        <h1>VOTRE PANIER</h1>
        <div class="bigLine"></div>
        <main v-if="sortItems.length > 0">
        <div v-for="item in sortItems" :key="item.id" class="item">
                <div class="itemImg"><img :src="item.image" alt="velo img"></div>
            <div>
                <button @click="removeItems(item.id)" class="RemoveItem"><img src="../assets/images/xmark-solid.svg" alt="RemoveItem"></button>
                <div class="itemData">
                    <h3>{{ item.name }}</h3> 
                    <div>Customisé</div>               
                    <div style="color: #F4CE14;">Modifications ></div>
                    <div>{{  formatPrice(item.price) }} €</div>
                </div>
            </div>
        </div>
        <div class="smallLine"></div>
        <div class="btnAddToCart"><BtnAddToCartV2 txtBtn="Valider mon panier"/></div>
        </main>
        <main v-else>
        <h2 class="voidCart">Le Panier est vide</h2>
        </main>
    </section>
  </template>

<style>
.cart{
    margin-top: 20%;
    margin-left: 10%;
    margin-right: 10%;
}
.cart h1{
    font-family: "MuseoModerno", sans-serif;
    font-size: 2rem;
    color: #373737;
    font-weight: 200;
    text-align: center;
    margin-bottom: 3%;
}
.bigLine{
    height: 2px;
    width: 100%;
    background-color: #373737;
}
.smallLine{
    height: 1px;
    width: 100%;
    background-color: #373737;
}
.item{
    margin-top: 3%;
    margin-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 200px;
}
.btnAddToCart{
    margin-top: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
}
.itemImg{
    width: 60%;
    display: flex;
    align-items: center;
}
.itemImg img{
    width: 100%;
}
.itemData{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
}
.itemData div{
    font-weight:200;
}
.itemData h3{
    font-weight: 600;
    text-decoration: underline;
}
.RemoveItem{
    background-color: transparent;
    border: none;
    width: 100%;
    display: flex;
    justify-content: end;
}
.RemoveItem img{
    height: 35px;
}
.voidCart{
    color: #379777;
    text-align: center;
    margin-top: 10vh;
}
</style>