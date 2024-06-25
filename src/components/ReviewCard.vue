<template>    
<div class="card-container">
    <div class="card-content__thumbnail-background"></div>
    <div class="card-content">
        <img
            class="card-content__thumbnail"
            type="image/svg"
            src="../assets/rv-mediation-logo-small.svg"
            alt="Klein logo van RV Mediation"
        />
        <p class="card-content__review text--italic">
            “Rob is een vriendelijke en geduldige man. De samenwerking die ik met hem gehad heb, was heel fijn. Hij nam de tijd en energie om me nieuwe dingen te leren. Daarbij legde hij alles goed uit zodat ik het begreep. Zijn eerlijkheid en aanmoediging zijn de dingen die ik het meest heb gewaardeerd. Hij geeft je de energie die je nodig hebt en ziet wanneer de rust van toepassing is.”
        </p>
        <p class="text__align-right">
            voornaam, woonplaats
        </p>
    </div>
</div>
</template>
<script></script>
<style scoped>

.card-container {
    /* border: 1px solid; */
    position: relative;
    width: fit-content;
}

.card-content,
.card-content__thumbnail-background {
    background-color: #fff;
    box-shadow: 2px 4px 6px rgba(0,0,0,.15);
}

.card-content {
    position: relative;
    top: 0px;
    left: 38px;
    border-radius: 12px;
    padding: 32px 32px 16px 64px;
    font-size: 0.875rem;
    margin-right: 38px;
    max-width: 400px;
}

.card-content__review {
    font-weight: 300;
}

.card-content__thumbnail,
.card-content__thumbnail-background {
    position: absolute;
    top: 24px;
    left: -38px;
    width: 80px;
}

.card-content__thumbnail-background {
    left: 0px;
    height: 80px;
    border-radius: 50%;
}
</style>