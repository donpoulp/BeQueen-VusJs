<script>
import BtnAddToCart from './BtnAddToCart.vue';
import BtnPersonalisation from './BtnPersonalisation.vue';
import { useCartStore } from "../stores/cart";

export default {
    components: {BtnAddToCart, BtnPersonalisation},
    props: {
        id:Number,
        name: String,
        description: String,
        price: Number,
        image: String
    },
    data(){
        return{
            store: useCartStore(),
            item:{
                id: this.id,
                name:this.name,
                description: this.description,
                price: this.price,
                image: this.image,
            }
        }
    },
    methods: {
    formatPrice(value) {
        let val = (value/100).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")
        
    },
}

}
</script>

<template>
    <section class="product">
        <RouterLink :to="`/product/${ id }`" class="marginProduct">
                <div class="topProduct">
                    <div class="productName" >{{ name }}</div>
                    <div class="productPrice">{{ formatPrice(price) }} $</div>
                </div>
                <div class="productDescription">
                    <p>{{ description }}</p>
                </div>
                <div>
                    <img :src="image" alt="image velo" class="imgProduct"/>
                </div>
        </RouterLink>
                <div class="Btn">
                    <BtnAddToCart @click="store.addItems(item)"></BtnAddToCart>
                    <BtnPersonalisation></BtnPersonalisation>
                </div>
                
            </section>

</template>


<style>
.product{
    background-color: #379777;
    opacity: 88%;
    height: fit-content;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 6px rgba(0, 0, 0, 0.178);
    margin-bottom: 5%;
}
.topProduct{
    margin-top: 4%;
    width: 92%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #F4CE14;
    font-family: "MuseoModerno", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 500;
    margin-left: 3%;
}
.productName{
    font-size: 1.5rem;
    font-family: "MuseoModerno", sans-serif;
}
.productPrice{
    font-size: 1.3rem;
    line-height: 165%;
}
.productDescription{
    width: 95%;
    margin-top: 3%;
    text-align: center;
    color: white;
    font-family: "Montserrat", sans-serif;
}
.imgProduct{
    width: 100%;
}
.Btn{
    width: 90%;
    height: 5vh;
    margin-bottom: 3%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
</style>