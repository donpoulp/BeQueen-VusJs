<script setup>

</script>

<template>
    <nav>
        <ul>
            <li><RouterLink to="/">Acceuil</RouterLink></li>
            <div class="smallLine"></div>
            <li><RouterLink to="/productsList">Catalogue</RouterLink></li>
            <div class="smallLine"></div>
            <li><RouterLink to="/auth">Connection / Inscription</RouterLink></li>
            <div class="smallLine"></div>
        </ul>
    </nav>
</template>

<style>
nav{
  height: 100vh;
  padding-top: 15vh;
  margin-left: 10%;
  margin-right: 10%;
}
nav ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 40vh;
}
nav ul li{
    list-style-type: none;
    font-size: 1.5rem;
}
nav ul li a{
    color: #379777;
}
.smallLine{
    height: 1px;
    width: 100%;
    background-color: #373737;
}
</style>