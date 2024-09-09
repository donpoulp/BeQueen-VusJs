<script>
export default{
    name: "BtnAddToCartV2",
    props: ['txtBtn']
}
</script>


<template>
    <button class="addToCarteBtnV2" >{{ txtBtn}}</button>
</template>


<style>
.addToCarteBtnV2{
    height: 40px;
    background-color: #379777;
    opacity: 88%;
    color: white;
    padding: 5%;
    border-radius: 10px;
    border-color: transparent;
    font-family: "Montserrat", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;

}
</style>