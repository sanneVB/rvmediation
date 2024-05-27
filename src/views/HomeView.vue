<template>
  <header-content />
  <section class="container__snapPoint">
    <landing-page />
  </section>
  <section class="container__snapPoint">
    <introduction-page />
  </section>
  <section class="container__snapPoint">
    <employee-page />
  </section>
  <section class="container__snapPoint">
    <employer-page />
  </section>
  <section class="container__snapPoint">
    <about-me-page />
  </section>
  <section class="container__snapPoint">
    <testimonials-page />
g    <footer-content class="footer"/>
  </section>
  
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
name: 'HomeView',
components: {
  HeaderContent,
  LandingPage,
  IntroductionPage,
  EmployeePage,
  EmployerPage,
  AboutMePage,
  TestimonialsPage,
  FooterContent
}
}
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>

html {
overflow-x: hidden;
scroll-snap-type: y mandatory;
height: 100vh;
overflow-y: scroll;
}

.container__snapPoint{
height: 100vh;
width: 100vw;
scroll-snap-align: start;
}

</style>