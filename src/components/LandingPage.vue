<template>
  <div class="homeView">
    <h1>Rob</h1>
    <h1>Verbeek</h1>
    <img src="../assets/rv-mediation-logo.svg">
  </div>

</template>

<script>
export default{
}
</script>

<style scoped>

  h1 {
    color: white
  }
  .homeView {
    /* transform: scaleY(-1);  */
    background-image: url('../assets/hero2.jpg');
    background-size:cover;
    background-position:50% 10%;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }


</style>

<!--<template>
  <div>
    <section class="top-section">
      <!~~ Ander soort header ~~>
      <header>
        <div class="logo">Mijn Logo</div>
        <!~~ Zelfde navigatiemenu ~~>
        <nav-component/>
      </header>
    </section>
    <section class="scroll-section">
      <!~~ Content van de landingspagina ~~>
      <div class="snap-container">
        <div class="snap-section">Section 1</div>
        <div class="snap-section">Section 2</div>
        <div class="snap-section">Section 3</div>
        <!~~ Meer secties indien nodig ~~>
      </div>
    </section>
    <HeaderContent :isSticky="isStickyHeader" v-if="showStickyHeader" />
  </div>
</template>

<script>
import HeaderContent from './HeaderContent.vue';

export default {
  components: {
    HeaderContent
  },
  data() {
    return {
      showStickyHeader: false,
      isStickyHeader: false
    };
  },
  
  mounted() {
   window.addEventListener('scroll', this.handleScroll);
   },
  beforeUnmount() {
   window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight / 2; // Halverwege de pagina

      if (scrollPosition > triggerPosition) {
        this.showStickyHeader = true;
        this.isStickyHeader = true;
      } else {
        this.showStickyHeader = false;
      }
    }
  }
};
</script>-->