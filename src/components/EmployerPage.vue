<template>
<div class="page-container">
  <h1>Wat kan ik voor u betekenen als werkgever?</h1>
  <div class="section-container">
    <div class="section-container__column-left">
      <div>
        <p>Mediation is bedoeld om conflicten tussen werkgever en werknemer op te lossen of tussen twee werknemers. Er kan gekozen worden voor een onafhankelijk bemiddelaar die dit traject begeleidt. Maar beter nog is het voorkomen van een conflict. Dit is een van mijn specialiteiten.</p>
      </div>
      <div class="section-container__illustration-left">
        <img
          class="section-container__image-left"
          src="../assets/rvmediation-employer-truck-white.jpg"
          alt="picture of a truck on the road"
        />
        <p class="text-box__white-right">“Door Rob zijn grondige werk is het bedrijf weer goed gaan draaien, zoals iedereen het graag ziet.”</p>
      </div>
    </div>
    <div class="section-container__column-right">
      <div class="section-container__illustration-right">
        <!-- TODO: Replace placeholder text (orange) with new unique text and remove style="color: #fb8c00"-->
        <p class="text-box__white-left"><span style="color: #fb8c00">"Door Rob zijn grondige werk is het bedrijf weer goed gaan draaien, zoals iedereen het graag ziet.”</span></p>
        <img
          class="section-container__image-right"
          src="../assets/rvmediation-employer-truck-black.jpg"
          alt="picture of a truck in the city at twilight"
        />
      </div>
      <div>
        <p>Ik ga door middel van een 'conflictanalyse' kijken waar er in de organisatie potentiële conflicten liggen. Ik ga daarmee deze conflicten vroegtijdig naar een passende oplossing zoeken, waardoor het veel werkbaarder wordt en dat de onderlinge frictie verdwijnt.</p>
      </div>
    </div>
  </div>
</div>
<ContactBox></ContactBox>
</template>
<script>
import ContactBox from "@/components/ContactBox.vue";

export default {
  name: "EmployerPage",
  components: {
    ContactBox
  }
};
</script>
<style scoped></style>