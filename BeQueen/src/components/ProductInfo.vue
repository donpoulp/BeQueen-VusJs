<script>
import BtnAddToCartV2 from './BtnAddToCartV2.vue';
import BtnPersonnalisationV2 from './BtnPersonnalisationV2.vue';
import BtnTechniqueFiche from './BtnTechniqueFiche.vue';
import { useCartStore } from "../stores/cart";

export default{
    components: {BtnAddToCartV2, BtnPersonnalisationV2, BtnTechniqueFiche},
    mounted:function(){
        this.getData() //getData sera exécutée au chargement de la page
    },
    data() {
        return {
            store: useCartStore(),
            product: {},
            loading: false,
            error: null,
        };
    },
    methods:{
        getData(){
            this.loading = true

            fetch(`http://127.0.0.1:8000/api/product/${this.$route.params.id}`)
            .then(response => response.json())
            .then(data => this.product = data.getProductById, this.loading = false)
            .then(log => console.log(log))
            .catch(err => this.error = err)
        },
        formatPrice(value) {
        let val = (value/100).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "")
    }
    }
    
}
</script>

<template>
    <section class="productFiche">
        <div>
            <img :src="product.image" alt="image velo" class="imgProduct"/>
        </div>
        <div>
            <h2 class="h2ProductName">{{ product.name }}</h2>
            <p class="productInfosDescription">Description : {{ product.description }}</p>
        </div>
        <div class="productInfosPrice">
            <div class="colorGrp">
                <div class="round red"></div>
                <div class="round orange"></div>
                <div class="round yellow"></div>
                <div class="round green"></div>
                <div class="round blue"></div>
                <div class="round purple"></div>
            </div>
            {{  formatPrice(product.price) }} €
            <div>en stock </div>
        </div>
        <div class="btnGroupe">
            <BtnAddToCartV2 class="BtnIso" @click="store.addItems(product)"/>
            <BtnPersonnalisationV2 class="BtnIso"/>
        </div>
        <div class="lineYellow"></div>
        <div>
            <BtnTechniqueFiche />
        </div>
        <div class="ProductsInfosInfos">
            <img src="../assets/images/BeQueenInAction.png" alt="BeQueenInAction" class="ProductsInfosInfosImg">
            <p><strong>PAR DES PASSIONNÉS, POUR DES PASSIONNÉS.</strong><br><br>
            Chez Be Queen, le plaisir de conduite est au centre de nos préoccupations.
            Ton futur vélo est aussi cool à rider qu’à regarder.<br>
            Aucun compromis sur la qualité de fabrication de notre cadre Annécien en aluminium garanti à vie* pour profiter indéfiniment de ton Bikle.
            Profitez également d’un SAV irréprochable, d’une équipe disponible pour répondre à toutes vos questions avant, pendant et après votre achat.
            La qualité du produit et la performance de notre SAV font aujourd’hui de Bikle la meilleure marque de vélos électriques du marché.<br>
            Retrouvez ici le certificat de conformité CE EN 15194
            *Cadre garanti à vie sur son intégrité structurelle dans les conditions normales d’utilisation. Hors peintures et accessoires.</p>
        </div>
        <div class="ProductsInfosInfos2">
            <img src="../assets/images/velo-ancien.png" alt="Velo ancien" class="">
            <p><strong>Notre Histoire</strong><br><br>
                l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. </p>
        </div>
    </section>
</template>

<style>
#app{
    background-color: #E1DFDC;
}
.productFiche{
    margin-right: 5%;
    margin-left: 5%;
}
.h2ProductName{
    font-size: 2.5rem;
}
.productInfosDescription{
    margin-top: 2%;
    font-size: 1.1rem;
    font-weight: bold;
}
.productInfosPrice{
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-right: 3%;
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 1.5rem;
}
.productInfosPrice div{
    color: #C7A326;
}
.btnGroupe{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3%;
}
.BtnIso{
    width: 60%;
    margin-bottom: 3%;
    font-size: 1rem;
}
.lineYellow{
    height: 2px;
    background-color: #F4CE14;
}
.ProductsInfosInfos{
    background-color: #373737;
    margin-left: 5%;
    margin-right: 5%;
    color: white;
    border-radius: 7%;
    padding-bottom: 5%;
    text-align: center;
}
.ProductsInfosInfosImg{
    width: 100%;
}
.ProductsInfosInfos p{
    margin-top: 5%;
    margin-left: 4%;
    margin-right: 4%;
}
.ProductsInfosInfos2{
    margin-top: 40%;
    background-color: white;
    margin-left: 5%;
    margin-right: 5%;
    color: black;
    border-radius: 7%;
    padding-bottom: 5%;
    text-align: center;
    margin-bottom: 10%;
}
.ProductsInfosInfos2 img{
    margin-top: -30%;
}
.ProductsInfosInfos2 p{
    margin-top: 5%;
    margin-left: 4%;
    margin-right: 4%;
    font-size: 1.2rem;
}
.colorGrp{
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 5%;
    margin-right: 3%;
    background-color: #D9D9D9;
    padding: 2%;
    border-radius: 20px;
}
.round{
    height: 25px;
    width: 25px;
    border-radius: 90%;
}
.red{
    background-color: red;
}
.orange{
    background-color: orange;
}
.yellow{
    background-color: yellow;
}
.green{
    background-color: greenyellow;
}
.blue{
    background-color: blue;
}
.purple{
    background-color: purple;
}
</style>