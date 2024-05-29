<template>
    <div class="grid-container">
        <div class="grid-container__grid-item">
            <h1>ROB</h1>
            <h2>Verbeek</h2>
        </div>
        <div class="grid-container__grid-item"></div>
        <div class="grid-container__grid-item"></div>  
        <div class="grid-container__grid-item"></div>
        <div class="grid-container__grid-item">
            <img class="grid-container__image--rv" src="../assets/rv-mediation-logo.svg" alt="logo van rvmediation">
        </div>
        <div class="grid-container__grid-item"></div>  
        <div class="grid-container__grid-item"></div>
        <div class="grid-container__grid-item">
            <div>
                <p>"doortastend"</p>
                <div class="grid-container__grid-text-image">
                    <p class="grid-container__text-1">RVmediation is lid van</p>
                    <img class="grid-container__image--nmv-1" src="../assets/rv-mediation-nmv-logo.png" alt="logo van de nmv">
                </div>
            </div>
        </div>
        <div class="grid-container__grid-item">
            <div class="grid-container__grid-text-image">
                <p class="grid-container__text-2">RVmediation is lid van</p>
                <img class="grid-container__image--nmv-2" src="../assets/rv-mediation-nmv-logo.png" alt="logo van de nmv">
            </div>
        </div>  
    </div>
</template>

<script></script>

<style scoped>

    .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        background-image: url('../assets/rvmediation-hero.webp');
        background-color: #001526;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 100vh;
    }

    .grid-container__grid-item:nth-of-type(1) {
        padding: 0 9%;
    }

    .grid-container__grid-item:nth-of-type(5) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .grid-container__grid-item:nth-of-type(8) {
        display: flex;
        justify-content: center;
        align-items: end;
        padding-bottom: 37px;
    }

    .grid-container__grid-item:nth-of-type(8) > div > p {
        font-size: 1.75rem;
        color: #FB8C00;
        font-weight: 700;
        font-style: italic;
        background-color: rgba(0, 0, 0, 0.6);
        text-align: center;
        padding: 10px 10px;
    }

    .grid-container__grid-item:nth-of-type(9) {
        display: flex;
        justify-content: end;
        align-items: end;
        padding-bottom: 37px;
        padding-right: 9%;
    }

    h1, h2 {
        color: #FFF;
    }

    h1 {
        font-size: 5rem;
        margin-bottom: -35px;
    }

    h2 {
        font-size: 2.25rem;
        letter-spacing: 0.3rem;
        padding-left: 5px;
    }

    p {
        color: white;
    }

    .grid-container__image--rv {
        height: 56px;
    }

    .grid-container__image--nmv-1, .grid-container__image--nmv-2 {
        height: 48px;
    }

    .grid-container__text-1, .grid-container__text-2 {
        font-size: 0.75rem;
        padding-bottom: 12px;
        text-align: center;
        font-weight: bold;
        font-style: italic;
    }

    .grid-container__image--nmv-1, .grid-container__text-1 {
        display: none;
    }

    @media screen and (max-width: 599px) {

        .grid-container {
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: auto;
        }

        .grid-container__grid-item:nth-of-type(9) {
            display: none;
        }

        .grid-container__grid-text-image {
            padding-top: 40px;
        }
        
        .grid-container__image--nmv-1, .grid-container__text-1 {
            display: block;
        }

        .grid-container__image--nmv-1 {
            padding-left: 16px;
        }

        h1 {
            font-size: 3rem;
            margin-bottom: -23px;
            padding-left: 2px;
        }
        
        h2 {
            font-size: 1.5rem;
            letter-spacing: 0.1rem;
        }

        .grid-container__image--rv {
            height: 53px;
            margin-top: 20px;
        }

        .grid-container__image--nmv {
            height: 36px;
        }

        .grid-container__grid-item:nth-of-type(8) > p {
            font-size: 1.625rem;
        }      
    }

    @media screen and (min-width: 600px) and (max-width: 768px) {
        h1 {
            font-size: 4rem;
        }
        
        h2 {
            font-size: 2rem;
            letter-spacing: 0.1rem;
        }

        .grid-container__image {
            height: 53px;
        }

        .grid-container__image--nmv-2 {
            height: 36px;
        }

        .grid-container__grid-item:nth-of-type(8) > p {
            font-size: 1.625rem;
        }

    }

</style>