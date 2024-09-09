<script>
export default{
    name: "BtnPersonalisationV2"
}
</script>


<template>
    <button class="btnPersonalisationV2"><div>Personalisation</div><img src="../assets/images/palette-solid.png" alt=""></button>
</template>


<style>
.btnPersonalisationV2{
    height: 40px;
    background-color: #D9D9D9;
    color: black;
    padding: 3%;
    border-radius: 10px;
    border-color: #379777;
    border-width: 2px;
    font-family: "Montserrat", sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.btnPersonalisationV2 img{
    height: 25px;
}
</style>