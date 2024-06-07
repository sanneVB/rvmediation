<template>
  <header-content :isVisible="isVisible" />
  <section class="container__snapPoint" id="landing">
    <landing-page @changeVisibility="handleVisibilityChange" />
  </section>
  <section class="container__snapPoint" id="introduction">
    <introduction-page />
  </section>
  <section class="container__snapPoint" id="employee">
    <employee-page />
  </section>
  <section class="container__snapPoint" id="employer">
    <employer-page />
  </section>
  <section class="container__snapPoint" id="about-me">
    <about-me-page />
  </section>
  <section class="container__snapPoint container--footer" id="testimonials">
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

  mounted: function() {
    // ref: https://www.educative.io/answers/how-to-make-a-webpage-that-changes-color-as-you-scroll-down
    const body = document.querySelector('body');
    const sections = document.querySelectorAll('section');

    // setting the background color of each of the sections
    sections.forEach((section, index) => {
        const bgColors = [
        '#FDFDFD',
        '#f2fbfb'  // Same as #00AEB8 with 5% opacity!
        ];

        section.style.backgroundColor = bgColors[index % bgColors.length];
    });

    window.addEventListener('scroll', () => {
    /* calculating the vertical scroll position of the page using 
        the `window.scrollY` property */
    const topScroll = window.scrollY;
    
    /* calculating the maximum scroll height of the page by subtracting
        the height of the viewport (innerHeight) from the total height (scrollHeight) */
    const maximumTopScroll = body.scrollHeight - window.innerHeight;
    
    // calculating the scroll fraction
    const scrollFraction = topScroll / maximumTopScroll;
    
    // setting an arbitrary RGB color code as the starting color
    const [red, green, blue] = [0, 174, 184];  // Same as #00AEB8!
    
    // calculating the rgb values based on the scroll fraction
    const bColor = `rgb(${Math.round(red * scrollFraction)}, 
    ${Math.round(green * scrollFraction)}, ${Math.round(blue * scrollFraction)})`;
    
      /* setting the backgroundColor to bColor for smooth color
          transition as the user scrolls down the page.*/
      body.style.backgroundColor = bColor;
    });
  }
};

</script>

<style>
html {
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
}

.container__snapPoint {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  scroll-margin-top: 80px;
  /* scroll-margin-top: 76px; */
}
.container--footer {
  height: calc(100vh - 80px);
}
</style>
