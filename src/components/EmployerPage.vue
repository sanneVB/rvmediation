<template>
<div class="page-container">
  <h1>Wat kan ik voor u betekenen als werkgever?</h1>
  <div class="section-container">
    <div class="section-container__column-left">
      <div>
        <P>Mediation is bedoeld om conflicten tussen werkgever en werknemer op te lossen of tussen twee werknemers. Er kan gekozen worden voor een onafhankelijk bemiddelaar die dit traject begeleidt. Maar beter nog is het voorkomen van een conflict. Dit is een van mijn specialiteiten.</p>
      </div>
      <div class="section-container__illustration">
        <img
          class="section-container__image"
          src="../assets/rvmediation-employer-truck-white.jpg"
          alt="picture of a truck on the road"
        />
        <p class="text-box__white-right">“Door Rob zijn grondige werk is het bedrijf weer goed gaan draaien, zoals iedereen het graag ziet.”</p>
      </div>
    </div>
    <div class="section-container__column-right">
      <div class="section-container__illustration">
        <!-- TODO: Replace red text with new unique text -->
        <p class="text-box__white-left"><span style="color: red">"Door Rob zijn grondige werk is het bedrijf weer goed gaan draaien, zoals iedereen het graag ziet.”</span></p>
        <img
          class="section-container__image"
          src="../assets/rvmediation-employer-truck-black.jpg"
          alt="picture of a truck in the city at twilight"
        />
      </div>
      <div>
        <P>Ik ga door middel van een 'conflictanalyse' kijken waar er in de organisatie potentiële conflicten liggen. Ik ga daarmee deze conflicten vroegtijdig naar een passende oplossing zoeken, waardoor het veel werkbaarder wordt en dat de onderlinge frictie verdwijnt.</p>
      </div>
    </div>
  </div>
</div>
</template>
<script></script>
<style scoped>

  ul {
    padding-left: 1rem;
  }

  .section-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    gap: 80px;
    margin-top: 40px;
  }

  .section-container__column-left {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .section-container__column-right {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  @media screen and (max-width: 1074px) {
    .section-container__column-right {
      flex-direction: column-reverse;
    }
  }

  .section-container__image {
    border-radius: 1rem;
    width: 240px;
    height: fit-content;
  }

  .section-container__illustration {
    display: flex;
    justify-content: center;
    align-content: center;
    padding-bottom: 32px;
    padding-top: 32px;
  }

  .text__blue {
    color: #00AEB8;
  }

  .text__blue-bold {
    font-weight: 600;
    color: #00AEB8;
  } 

  .text-box__white-right {
    align-content: center;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 2px 4px 6px rgba(0,0,0,.15);
    color: #00AEB8;
    font-variation-settings: "slnt" -10;
    font-weight: 600;
    padding: 1.25rem;
    position: relative;
    right: 1.25rem;
    top: 1rem;
    text-align: center;
    text-shadow: 2px 4px 6px #d6d6d6;
    width: 232px;
  }

  .text-box__white-left {
    align-content: center;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 2px 4px 6px rgba(0,0,0,.15);
    color: #00AEB8;
    font-variation-settings: "slnt" -10;
    font-weight: 600;
    padding: 1.25rem;
    position: relative;
    left: 1.25rem;
    top: 1rem;
    text-align: center;
    text-shadow: 2px 4px 6px #d6d6d6;
    width: 232px;
  }
</style>
