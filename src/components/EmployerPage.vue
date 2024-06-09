<template>
  <h1>Wat kan ik voor u betekenen als werkgever?</h1>
  <div class="page-container">
    <div class="page-container__column">
      <div>
        <P>Mediation is bedoeld om conflicten tussen werkgever en werknemer op te lossen of tussen twee werknemers. Er kan gekozen worden voor een onafhankelijk bemiddelaar die dit traject begeleidt. Maar beter nog is het voorkomen van een conflict. Dit is een van mijn specialiteiten.</p>
      </div>
      <div class="page-container__illustration">
        <img
          class="page-container__image"
          src="../assets/rvmediation-employer-truck-white.jpg"
          alt="picture of a truck on the road"
        />
        <p class="text-box__white-right">“Door Rob zijn grondige werk is het bedrijf weer goed gaan draaien, zoals iedereen het graag ziet.”</p>
      </div>
    </div>
    <div class="page-container__column">
      <div class="page-container__illustration">
        <!-- TODO: Replace red text with new unique text -->
        <p class="text-box__white-left"><span style="color: red">"Door Rob zijn grondige werk is het bedrijf weer goed gaan draaien, zoals iedereen het graag ziet.”</span></p>
        <img
          class="page-container__image"
          src="../assets/rvmediation-employer-truck-black.jpg"
          alt="picture of a truck in the city at twilight"
        />
      </div>
      <div>
        <P>Ik ga door middel van een 'conflictanalyse' kijken waar er in de organisatie potentiële conflicten liggen en ga daarmee deze conflicten vroegtijdig naar een passende oplossing zoeken, waardoor het veel werkbaarder wordt en dat de onderlinge frictie verdwijnt.</p>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>

  ul {
    padding-left: 1rem;
  }

  .page-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    padding-left: 15vw;
    padding-right: 15vw;
    gap: 80px;
    margin-top: 40px;
  }

  .page-container__column {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  .page-container__image {
    border-radius: 1rem;
    width: 240px;
  }

  .page-container__illustration {
    display: flex;
    justify-content: center;
    align-content: center;
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
    font-weight: 600;
    font-style: italic;
    padding: 1.25rem;
    position: relative;
    left: 1.25rem;
    top: 1rem;
    text-align: center;
    text-shadow: 2px 4px 6px #d6d6d6;
    width: 232px;
  }
</style>
