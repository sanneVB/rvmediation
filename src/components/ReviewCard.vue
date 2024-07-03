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
        <!-- Opm.: Als alle reviewkaartjes met echte teksten bevatten,
         verwijder de volgende regels code... -->
        <p class="card-content__review text--italic text--light"
        v-html="reviewers.reviewText">
        </p>
        <!--  ...vervang het met de code hieronder! -->
        <!-- <p class="card-content__review text--italic text--light">
            {{ reviewers.reviewText }}
        </p> -->
        <p class="text__align-right"
        v-if="Object.keys(reviewers.name).length===0">        
            anoniem
        </p>
        <p class="text__align-right"
        v-else-if="Object.keys(reviewers.residence).length===0">        
            {{ reviewers.name }}
        </p>
        <p class="text__align-right"
        v-else>
            {{ reviewers.name }}, {{ reviewers.residence }}
        </p>
    </div>
</div>
</template>
<script>
export default {
    name: 'ReviewCard',
    props: {
        'reviewers': {
            type: Array,
        },
    },
}
</script>
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

@media screen and (max-width: 375px) {
    .card-content {
        padding: 16px 24px 8px 48px;
        margin-right: 38px;
    }

    .card-content__thumbnail,
    .card-content__thumbnail-background {
        top: 16px;
        left: -32px;
        width: 64px;
    }

    .card-content__thumbnail-background {
        left: 8px;
        height: 64px;
    }
}
</style>