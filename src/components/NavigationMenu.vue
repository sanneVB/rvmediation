<template>
    <nav class="nav">
        <button @click="toggleNav" :class="{ 'nav__toggle--change': showNav }" class="nav__toggle">
            <div class="nav__bar"></div>
            <div class="nav__bar"></div>
            <div class="nav__bar"></div>
        </button>
        <div v-if="showNav" class="nav__list">
            <ul class="nav__ul">
                <li @click="closeNav" class="nav__item">
                  <a href="./#landing" class="nav__link">Home</a>
                </li>
                <li @click="closeNav" class="nav__item">
                  <a href="./#introduction" class="nav__link">Bemiddelaar voor de logistieke sector</a>
                </li>
                <li @click="closeNav" class="nav__item">
                  <a href="./#employee" class="nav__link">Voor werknemers</a>
                </li>
                <li @click="closeNav" class="nav__item">
                  <a href="./#employer" class="nav__link">Voor werkgevers</a>
                </li>
                <li @click="closeNav" class="nav__item">
                  <a href="./#about-me" class="nav__link">Wie ben ik?</a>
                </li>
                <li @click="closeNav" class="nav__item">
                  <a href="./#testimonials" class="nav__link">Wat zeggen anderen?</a>
                </li>
            </ul>
            <v-btn class="button">NEEM CONTACT OP</v-btn>
            <!-- button zou volgens design in het midden gecentreerd moeten zijn, hou rekening met het feit dat je
            geen margins op een block element mag zetten bij BEM!!! Zorgt voor problemen -->
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    closeNav() {
      this.showNav = false;
    },
  },
};
</script>

<style scoped>
li::marker {
  color: #fff;
}

.nav__item {
  padding: 12px 0;
}

.nav__toggle {
  position: relative;
  /* mocht je de hoogte/breedte willen aanpassen let op! Dit heeft direct invloed op de positie 
  van de header__image (headercontent.vue) */
  height: 32px;
  width: 32px;
  border-radius: 4px;
  border: 2px solid #FFF;
  background-color: transparent;
  padding: 2px 3px;
  z-index: 999;
}

.nav__toggle:hover {
  background-color: #00aeb8;
}

    .nav__list {
        position: absolute;
        height: 100vh;
        background-color: #00AEB8;
        top: 0;  
        right: 0;
        padding: 150px 10% 0 5%;
        box-shadow: -8px 0px 12px rgba(0, 0, 0, 0.25);
    }

    .nav__ul {
        margin-bottom: 100px;
    }

.nav__bar {
  width: 22px;
  height: 2px;
  margin: 4px 0;
  transition: 0.2s;
  border-radius: 4px;
  background-color: #fff;
}

.nav__toggle--change .nav__bar:nth-child(1) {
  transform: translateY(6px) rotate(-45deg);
}

.nav__toggle--change .nav__bar:nth-child(2) {
  opacity: 0;
}

.nav__toggle--change .nav__bar:nth-child(3) {
  transform: translateY(-6px) rotate(45deg);
}

.nav__link {
  text-decoration: none;
  color: #fff;
}
</style>
