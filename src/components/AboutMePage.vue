<template>
<div class="page-container">
  <h1>Wie ben ik?</h1>
  <div class="section-container">
    <div class="section-container__column">
      <img
        class="section-container__image"
        src="../assets/rvmediation-rob-verbeek.jpg"
        alt="picture of a truck on the road"
      />
    </div>
    <div class="section-container__column">
      <div>
        <P>Ik ben Rob Verbeek, eigenaar van <span class="text__blue-bold">RVmediation.</span></p>
        <p>Na jarenlang gewerkt te hebben in de logistieke sector, heb ik veel ervaring en kennis opgedaan betreft de communicatie in logistieke bedrijven. In een stijgende lijn merkte ik de ongenoegen van zowel de directie, de leidinggevende als van de uitvoerende werknemer(s) en iedereen die daarbij behoort. De oorzaak is de communicatie die vastloopt. Conflicten die uit de weg gegaan worden. Waardoor een goede samenwerking op het spel staat.</p>
        <p>Uit persoonlijke ervaring weet ik hoe een conflict binnen een organisatie de bedrijfsvoering kan verstoren. Dit is van invloed op de werksfeer. Daarnaast kun je als werkgever en/of als werknemer je ook erg onbegrepen en machteloos voelen als je midden in deze situatie bevind.Door de organisatie en jou als persoon conflictvaardiger te maken en te begeleiden met een passende aanpak wordt de toekomst visie weer helder en kan er een oplossing geboden worden.</p>
        <p>Met deze kennis heb ik de opleiding tot mediator behaald en ben ik gestart als zelfstandig ondernemer. Mijn visie is bedrijven en werknemers begeleiden naar een plezierige en langdurige werkrelatie door handvaten te geven in het communiceren met elkaar.</p>
        <p>Een conflict zie ik als een kans. Een kans op verbetering, een kans op groei. Door een doelgerichte en transparante aanpak wordt er snel resultaat geboekt.</p>
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

  .section-container__column {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 80px;
  }

  .section-container__image {
    border-radius: 1rem;
    width: 240px;
  }


  .text__blue {
    color: #00AEB8;
  }

  .text__blue-bold {
    font-weight: 600;
    color: #00AEB8;
  }
</style>
