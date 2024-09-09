<script>
import Product from '@/components/Product.vue';

export default {
    components: {Product},
    name: 'productsList',
    mounted:function(){
        this.getData() //getData sera exécutée au chargement de la page
    },
    data() {
        return {
            products: [],
            loading: false,
            error: null,
        };
    },
    methods: {
        getData(){
            this.loading = true

            fetch("http://127.0.0.1:8000/api/product")
            .then(response => response.json())
            .then(data => this.products = data.getProductWithCategory, this.loading = false)
            .then(log => console.log(this.products))
            .catch(err => this.error = err)
        }
    }
}
</script>

<template>
    <section id="headerProductsList">
        <h2 class="titleProductsList">Nos Velos</h2>
    </section>
    <section id="productsList">
        <p class="navigation">Acceuil >> Catalogue</p>
        <h3 class="categoryTitle">Categorie 1</h3>
        <div v-for="(data) in products">
                <Product v-if="data.category_id === 1" v-bind="data" class="productInfo"/>
        </div>
        <h3 class="categoryTitle">Categorie 2</h3>
        <div v-for="(data) in products">
                <Product v-if="data.category_id === 2" v-bind="data" class="productInfo"/>
        </div>
        <h3 class="categoryTitle">Categorie 3</h3>
        <div v-for="(data) in products">
                <Product v-if="data.category_id === 3" v-bind="data" class="productInfo"/>
        </div>
    </section>
</template>

<style>
#productsList{
  margin-left: 7%;
  margin-right: 7%;

}
#headerProductsList{
    height: 30vh;
    background-image: url(../assets/images/catalogueImg.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: end;
}
.titleProductsList{
    color: #F4CE14;
    margin-left: 3%;
    font-size: 3rem;
    font-family: "MuseoModerno", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 350;
    text-shadow: 3px 3px black;
}
.navigation{
    margin-top: 2%;
    margin-bottom: 2%;
}
.categoryTitle{
    margin-bottom: 2%;
    font-size: 1.7rem;
}
</style>