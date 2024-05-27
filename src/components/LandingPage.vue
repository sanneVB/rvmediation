<template>
    <div class="landingpage">
        <div class="landingpage__text-and-image">
            <p class="landingspage__text">RVmediation is lid van</p>
            <img class="landingpage__image" src="../assets/rv-mediation-nmv-logo.png" alt="logo van de nmv">
        </div>
    </div>
</template>

<script></script>

<style scoped>

    .landingpage {
        background-image: url('../assets/hero.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
    }

    .landingpage__text-and-image {
        position: absolute;
        bottom: 5px;
        right: 3%;
    }

    .landingspage__text {
        color: white;
        padding-bottom: 20px;
        font-weight: bold;
        font-style: italic;
        text-align: center;
    }

    .landingpage__image {
        height: 71px;
    }

</style>