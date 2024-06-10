<template>
<div class="page-container">
  <h1><span class="text__italic">Uw</span> bemiddelaar voor de logistiek sector</h1>
  <div class="section-container">
    <div class="section-container__column-left">
      <div>
        <P>De specialisatie van <span class="text__blue-bold">RVmediation</span> ligt in de logistieke sector. Door mijn jarenlange ervaring in deze sector zijn mij diverse dingen opgevallen. Er worden hoge verwachtingen aan de werknemers gesteld. Er is sprake van onderliggende conflicten die de sfeer bepalen op de werkvloer, waardoor er veel sprake is van verzuim. Dit komt voort uit een gebrek aan open communicatie.
        </p>
        <p>Door mijn persoonlijke kwaliteiten om te zetten in kennis als mediator en gedragsdeskundige kan ik het volgende voor uw bedrijf betekenen:</p>
        <ul>
          <li>een <span class="text__blue">stabielere</span> bedrijfscommunicatie</li>
          <li>een <span class="text__blue">stijgend</span> rendement (omzet/winst)</li>
          <li><span class="text__blue">behoud van</span> werknemers door tevredenheid</li>
          <li>een <span class="text__blue">dalend</span> verzuim</li>
          <li>een <span class="text__blue">prettige</span> werksfeer door open communicatie.</li>
        </ul>
      </div>
      <div class="section-container__illustration">
        <img
          class="section-container__image"
          src="../assets/rvmediation-intro-truck-road.jpg"
          alt="picture of a truck on the road"
        />
        <p class="text-box__white-right">Wist u dat 70% van het verzuim werkgerelateerd is?</p>
      </div>
    </div>
    <div class="section-container__column-right">
      <div class="section-container__illustration">
        <p class="text-box__white-left">Wist u dat 75% van de werknemers die vrijwillig ontslag nemen, aangeeft dat dit tot stand komt door een vervelende werksfeer?</p>
        <img
          class="section-container__image"
          src="../assets/rvmediation-intro-truck-city.jpg"
          alt="picture of a truck in the city at twilight"
        />
      </div>
      <div>
        <h2>Merkt u op dat er veel verzuim en/of verloop van werknemers binnen uw bedrijf is?</h2>
        <P><span class="text__blue-bold">RVmediation</span> kan u een passende aanpak voor uw bedrijf opzetten. Door met elkaar in gesprek te gaan wordt er ruimte gecreëerd voor een passende oplossing. Dit biedt de basis voor een stabiele en evenwichtige toekomst van uw bedrijf.</p>
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
    /* padding-left: 15vw;
    padding-right: 15vw; */
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