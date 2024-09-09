<script>
export default {
    name: "footer"
}
</script>


<template>
    <section id="footer">
        <div class="leftSideFooter">
            <h3 class="reseauxTitle">Nos réseaux</h3>
            <div class="reseauxLogo">
                <img src="../assets/images/logoInsta.svg" alt="">
                <img src="../assets/images/logoFacebook.svg" alt="">
                <img src="../assets/images/logoLinkdin.svg" alt="">
                <img src="../assets/images/logoLocalisation.svg" alt="">
            </div>
        </div>
        <div class="rightSideFooter">
                <div class="phone"><img src="../assets/images/phoneLogo.svg" alt=""> : 07 08 09 80 70</div>
                <div class="mail"><img src="../assets/images/mailLogo.svg" alt=""> : bequeen@gmail.com</div>
            <div class="copyright">© copyright by be queen team</div>
        </div>
    </section>
</template>


<style scoped>
#footer{
    height: 15vh;
    background-color: #45474B;
    opacity: 88%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 0;
    padding-bottom: 0;
}
.leftSideFooter{
    text-align: center;
    width: 35%;
}
.reseauxTitle{
    color: #F4CE14;
    margin-top: 0;
}
.reseauxLogo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.reseauxLogo img{
    height: 25px;
}
.rightSideFooter{
    display: flex;
    flex-direction: column;
    color: white;
}
.rightSideFooter div{
    margin-bottom: 2%;
    margin-top: 3%;
}
.phone,.mail{
    font-size: 14px;
    margin-left: 15%;
}

</style>