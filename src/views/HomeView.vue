<template>
  <header-content :isVisible="isVisible" />
  <section class="container__snapPoint section__landing" id="landing">
    <landing-page @changeVisibility="handleVisibilityChange" />
  </section>
  <section class="container__snapPoint section__blue" id="introduction">
    <introduction-page />
  </section>
  <section class="container__snapPoint section__white" id="employee">
    <employee-page />
  </section>
  <section class="container__snapPoint section__blue" id="employer">
    <employer-page />
  </section>
  <section class="container__snapPoint section__white" id="about-me">
    <about-me-page />
  </section>
  <section class="container__snapPoint section__blue container--footer" id="testimonials">
    <testimonials-page />
  </section>
  <footer-content class="footer" />
</template>

<script>
import HeaderContent from "@/components/HeaderContent.vue";
import LandingPage from "@/components/LandingPage.vue";
import IntroductionPage from "@/components/IntroductionPage.vue";
import EmployeePage from "@/components/EmployeePage.vue";
import EmployerPage from "@/components/EmployerPage.vue";
import AboutMePage from "@/components/AboutMePage.vue";
import TestimonialsPage from "@/components/TestimonialsPage.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderContent,
    LandingPage,
    IntroductionPage,
    EmployeePage,
    EmployerPage,
    AboutMePage,
    TestimonialsPage,
    FooterContent,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    handleVisibilityChange(currentVisibility) {
      this.isVisible = currentVisibility;
    },
  },
};

</script>

<style>
  html {
    overflow-x: hidden;
    scroll-snap-type: y mandatory;
    height: 100vh;
    overflow-y: scroll;
  }

  section {
    min-height: 100vh;
    scroll-margin-top: 80px;
  }

  .container--footer {
    height: calc(100vh - 80px);
  }
  
  /* Same as #00AEB8 with 5% opacity! */
  .section__blue {
    background-color: #f2fbfb;
  }

  /* Default background color */
  .section__white {
    background-color: #fdfdfd;
  }

  .section__landing {
    background-image: url("../assets/rvmediation-hero.webp");
    background-color: #001526;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  /* scroll snap will be activated for tables and smartphones */
  @media screen and (max-width: 768px) {

    .container__snapPoint {
      height: 100vh;
      width: 100vw;
      scroll-behavior: smooth;
      scroll-snap-align: start;
    }
  }
</style>
