<template>
  <div class="page-container">
    <h1>
        <span class="text--italic">Uw</span> bemiddelaar voor de logistieke sector
      </h1>
    <div class="section-container">
      <div class="section-container__column-left">
        <div>
          <P
            >De specialisatie van
            <span class="text__blue-bold">RVmediation</span> ligt in de
            logistieke sector. Door mijn jarenlange ervaring in deze sector zijn
            mij diverse dingen opgevallen. Er worden hoge verwachtingen aan de
            werknemers gesteld. Er is sprake van onderliggende conflicten die de
            sfeer bepalen op de werkvloer, waardoor er veel sprake is van
            verzuim. Dit komt voort uit een gebrek aan open communicatie.
          </P>
          <p>
            Door mijn persoonlijke kwaliteiten om te zetten in kennis als
            <router-link to="/mediator">mediator</router-link> en gedragsdeskundige kan ik het
            volgende voor uw bedrijf betekenen:
          </p>
          <ul>
            <li>
              een
              <span class="text__blue">stabielere</span> bedrijfscommunicatie
            </li>
            <li>
              een <span class="text__blue">stijgend</span> rendement
              (omzet/winst)
            </li>
            <li>
              <span class="text__blue">behoud van</span> werknemers door
              tevredenheid
            </li>
            <li>een <span class="text__blue">dalend</span> verzuim</li>
            <li>
              een <span class="text__blue">prettige</span> werksfeer door open
              communicatie.
            </li>
          </ul>
        </div>
        <div class="section-container__illustration-left">
          <img
            class="section-container__image-left"
            src="../assets/rvmediation-intro-truck-road.jpg"
            alt="picture of a truck on the road"
          />
          <p class="text-box__white-right">
            Wist u dat 70% van het verzuim werkgerelateerd is?
          </p>
        </div>
      </div>
      <div class="section-container__column-right">
        <div class="section-container__illustration-right">
          <p class="text-box__white-left">
            Wist u dat 75% van de werknemers die vrijwillig ontslag nemen,
            aangeeft dat dit tot stand komt door een vervelende werksfeer?
          </p>
          <img
            class="section-container__image-right"
            src="../assets/rvmediation-intro-truck-city.jpg"
            alt="picture of a truck in the city at twilight"
          />
        </div>
        <div>
          <h2>
            Merkt u op dat er veel verzuim en/of verloop van werknemers binnen
            uw bedrijf is?
          </h2>
          <P
            ><span class="text__blue-bold">RVmediation</span> kan u een passende
            aanpak voor uw bedrijf opzetten. Door met elkaar in gesprek te gaan
            wordt er ruimte gecreëerd voor een passende oplossing. Dit biedt de
            basis voor een stabiele en evenwichtige toekomst van uw bedrijf.</P
          >
        </div>
      </div>
    </div>
  </div>
  <ContactBox></ContactBox>
</template>
<script>
import ContactBox from "@/components/ContactBox.vue";

export default {
  name: "IntroductionPage",
  components: {
    ContactBox,
  },
};
</script>
<style scoped></style>
