<template>
  <h1>Wat kan ik voor u betekenen als werknemer?</h1>
  <div class="page-container">
    <div class="page-container__column-left">
      <div>
        <P>Voor de werknemers is het vooral van belang dat zij in een prettige omgeving kunnen werken. Maar dit is niet altijd het geval waardoor men zich soms niet gewaardeerd en begrepen voelt. Dit kan een conflict tot gevolg hebben.</p>
      </div>
      <div class="page-container__illustration">
        <img
          class="page-container__image"
          src="../assets/rvmediation-employee-driver-stepin.jpg"
          alt="picture of a truck on the road"
        />
        <p class="text-box__blue-right">“...door de uitvoerige coaching op maat was in vier sessies het grijze gebied opgehelderd en ben ik nu op mijn plaats...”</p>
      </div>
    </div>
    <div class="page-container__column-right">
      <div class="page-container__illustration">
        <p class="text-box__blue-left">“Door Rob zijn goede inlevingsvermogen en coaching ben ik weer op de goede weg.”</p>
        <img
          class="page-container__image"
          src="../assets/rvmediation-employee-driver-cabin.jpg"
          alt="picture of a truck in the city at twilight"
        />
      </div>
      <div>
        <P>Door mijn jarenlange ervaring in de logistieke sector ben ik zeer bekend met de cultuur die daar is, en daardoor kan ik ook mijzelf goed inleven in de mensen die daar actief zijn. Door mijn openheid en transparantie kan ik daardoor mensen makkelijk helpen in de situatie waar zij in zitten.</p>
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

  .page-container__column-left {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  .page-container__column-right {
    display: flex;
    flex-direction: column-reverse;
    gap: 48px;
  }

  .page-container__image {
    border-radius: 1rem;
    width: 240px;
  }

  .page-container__illustration {
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

  .text-box__blue-right {
    align-content: center;
    background-color: #66ced4;
    border-radius: 1rem;
    box-shadow: 2px 4px 6px rgba(0,0,0,.15);
    color: #fff;
    font-weight: 600;
    font-style: italic;
    padding: 1.25rem;
    position: relative;
    right: 1.25rem;
    top: 1rem;
    text-align: center;
    text-shadow: 2px 4px 6px #888888;
    width: 232px;
  }

  .text-box__blue-left {
    align-content: center;
    background-color: #66ced4;
    border-radius: 1rem;
    box-shadow: 2px 4px 6px rgba(0,0,0,.15);
    color: #fff;
    font-weight: 600;
    font-style: italic;
    padding: 1.25rem;
    position: relative;
    left: 1.25rem;
    top: 1rem;
    text-align: center;
    text-shadow: 2px 4px 6px #888888;
    width: 232px;
  }
</style>