<script>
export default {
    name: 'BtnTechniqueFiche'
}
</script>

<template>
    <button class="btnTechniqueFiche"><div>Fiche Technique</div><img src="../assets/images/chevron-left-solid.svg" class="chevron" /></button>
</template>

<style>
.btnTechniqueFiche{
    background-color: #D9D9D9;
    height: 40px;
    color: black;
    padding: 3%;
    border-radius: 10px;
    border-color: black;
    border-width: 2px;
    font-family: "Montserrat", sans-serif;
    font-size: 1rem;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.chevron{
    margin-top: -3%;
}
</style>