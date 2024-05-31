<template>
  <div class="container">
    <h2><span class="italic">Uw</span> bemiddelaar voor de logistieke sector</h2>
    <div class="container__grid-content">
      <section class="container__leftcontent">
        <p class="container--padding">
          De specialisatie van <span class="bold">RVmediation</span> ligt in de logistieke sector. Door mijn jarenlange ervaring
          in deze sector zijn mij diverse dingen opgevallen. Er worden hoge verwachtingen aan de werknemers gesteld.
          Er is sprake van onderliggende conflicten die de sfeer bepalen op de werkvloer, waardoor er veel sprake is
          van verzuim. Dit komt voort uit een gebrek aan open communicatie.
        </p>
        <p class="container--padding">
          Door mijn persoonlijke kwaliteiten om te zetten in kennis als <span class="layout-mediator">mediator</span> en gedragskundige kan ik het volgende voor uw
          bedrijf betekenen:
          <ul class="container--padding">
            <li>een stabielere bedrijfscommunicatie</li>
            <li>een stijgend rendement (omzet/winst)</li>
            <li>behoud van werknemers door tevredenheid</li>
            <li>een dalend verzuim</li>
            <li>een prettige werksfeer door open communicatie</li>
          </ul>
        </p>
        <div class="container-img-box-1">
          <img class="container-img-whitetruck" src="../assets/whitetruck.jpg">
          <v-card class="container-box-1">
            <p>
              Wist u dat 70% van het verzuim werkgerelateerd is?
            </p>
          </v-card>
        </div>
      </section>
      <section class="container__rightcontent">
        <div class="container-img-box-2">
          <v-card class="container-box-2">
            <p container--padding>
              Wist u dat 75% van de werknemers die vrijwillig ontslag nemen, aangeeft dat dit tot stand
              komt door een vervelende werksfeer?
            </p>
          </v-card>
          <img class="container-img-train" src="../assets/train.jpg">
        </div>
        <div>
          <p class="container--padding">Merkt u op dat er veel verzuim en/of verloop van werknemers binnen uw bedrijf is?</p>
          <p>
            <span class="bold">RVmediation</span> kan u een passende aanpak voor uw bedrijf opzetten. Door
            met elkaar in gesprek te gaan wordt er ruimte gecreeerd voor een passende oplossing. Dit biedt
            de basis voor een stabiele en evenwichtige toekomt van uw bedrijf.
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script></script>

<style scoped>

.container {
  max-width: 960px;
  margin-inline: auto;
}

.container__grid-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 5rem;
}

.container-img-box-1, .container-img-box-2 {
  position: relative;
}

.container-img-box-2 {
  display: flex;
  justify-content: end;
}

.container-box-1, .container-box-2 {
  position: absolute;
  max-width: 233px;
  color: #00AEB8;
  padding: 25px 4%;
  z-index: 99;
}

.container-box-1 {
  bottom: 10px;
  left: 200px;
}

.container-box-2 {
  bottom: 50px;
  left: 0;
}

.container-img-whitetruck {
  border-radius: 16px;
  height: 144px;
}

.container-img-train {
  border-radius: 16px;
  height: 299px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

h2 {
  text-align: center;
  padding-bottom: 40px;
}

.italic {
  font-style: italic;
}

.bold {
  font-weight: 700;
}

.layout-mediator {
  color: #00AEB8;
  text-decoration: underline;
}

ul {
  padding-bottom: 30px;
}

li {
  list-style-position: inside;
}

.container--padding {
  padding-bottom: 30px;
}

</style>
