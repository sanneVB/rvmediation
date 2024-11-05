<template>
  <div class="wrapper">
    <header-content :isVisible="isVisible" />
    <div class="wrapper__content">
      <section class="section__landing" id="landing">
        <landing-page @changeVisibility="handleVisibilityChange" />
      </section>
      <section
        class="section__blue page__minus-header"
        id="introduction"
      >
        <introduction-page />
      </section>
      <section
        class="section__white page__minus-header"
        id="employee"
      >
        <employee-page />
      </section>
      <section
        class="section__blue page__minus-header"
        id="employer"
      >
        <employer-page />
      </section>
      <section
        class="section__white page__minus-header"
        id="about-me"
      >
        <about-me-page />
      </section>
      <section
        class="section__blue page__minus-header-footer"
        id="testimonials"
      >
        <testimonials-page />
        <footer-content />
      </section>
    </div>
  </div>
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
/*
html {
  overflow-x: hidden;
  overflow-y: scroll;
}
*/

section {
  scroll-margin-top: 80px;
}

p,
ul {
  padding-bottom: 16px;
  line-height: 1.6;
}

.page-container {
  min-height: calc(100dvh - 272px);
}

.page__minus-header {
  min-height: calc(100dvh - 80px);
}

/* Setting different backgrounds */
/* Same as #00AEB8 with 5% opacity! */
.section__blue {
  /* background-color: red; */
  background-color: #f2fbfb;
}

.section__white {
  background-color: #fdfdfd;
}

.section__blue,
.section__white {
  padding-bottom: 32px;
}

.page__minus-header-footer {
  padding-bottom: 0;
}

.section__landing {
  background-image: linear-gradient(
      180deg,
      #00152600 0%,
      #00152660 80%,
      #00152690 90%,
      #00152699 100%
    ),
    url("../assets/rvmediation-hero.webp");
  background-color: #001526;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* Layout settings for sections */
.section-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(432px, 1fr));
  gap: 80px;
}

.section-container__column-left,
.section-container__column-right {
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  justify-self: center;
  max-width: 432px;
}

.section-container__image,
.section-container__image-left,
.section-container__image-right {
  position: relative;
  border-radius: 16px;
  max-width: 240px;
  max-height: 100%;
}

.section-container__image-left {
  left: 4px;
}

.section-container__image-right {
  left: -4px;
}

.section-container__illustration-left,
.section-container__illustration-right {
  display: flex;
  justify-content: center;
  align-content: center;
  padding-bottom: 32px;
  padding-top: 32px;
}

.text-box__white-right,
.text-box__white-left,
.text-box__blue-right,
.text-box__blue-left {
  z-index: 999;
  align-content: center;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
  font-variation-settings: "slnt" -10;
  font-weight: 600;
  flex-shrink: 0;
  padding: 20px;
  position: relative;
  text-align: center;
  width: 200px;
  height: fit-content;
}

.text-box__white-right,
.text-box__white-left {
  background-color: #fff;
  color: #00aeb8;
  text-shadow: 2px 4px 6px #d6d6d6;
}

.text-box__blue-right,
.text-box__blue-left {
  background-color: #66ced4;
  color: #fff;
  text-shadow: 2px 4px 6px #888888;
}

.text-box__white-right,
.text-box__blue-right {
  right: 4px;
  top: 16px;
}

.text-box__white-left,
.text-box__blue-left {
  left: 4px;
  top: 16px;
}

@media screen and (max-width: 1324px) {

.section-container__illustration-right {
  flex-wrap: wrap-reverse;
}

.section-container__illustration-left {
  flex-wrap: wrap;
}

.section-container__image-left {
  left: -16px;
}

.section-container__image-right {
  left: 16px;
}
.text-box__white-right,
.text-box__blue-right {
  right: -16px;
  top: -16px;
}

.text-box__white-left,
.text-box__blue-left {
  left: -16px;
  top: -16px;
}
}

@media screen and (max-width: 1072px) {

  .page-container,
  .section-container__column-left,
  .section-container__column-right,
  .box-container {
      max-width: 70vw;
  }

  .section-container {
    grid-template-columns: auto;
  }

  .section-container__column-right {
    flex-direction: column-reverse;
  }
}

@media screen and (max-width: 768px) {

  .page-container,
  .section-container__column-left,
  .section-container__column-right,
  .box-container {
      max-width: 75vw;
  }
}

@media screen and (max-width: 428px) {

  .page-container,
  .section-container__column-left,
  .section-container__column-right,
  .box-container {
      max-width: 85vw;
  }
}

@media screen and (min-width: 1075px) and (max-width: 1324px) {
  .section-container {
    gap: 80px;
  }
}

@media screen and (min-width: 769px) and (max-width: 1072px) {

  .section-container {
    gap: 64px;
  }
}

@media screen and (min-width: 590px) and (max-width: 1072px) {

  .section-container__column-left,
  .section-container__column-right {
    row-gap: 32px;
  }

  .section-container__illustration-right {
    flex-wrap: wrap;
  }

  .section-container__image-left {
    left: 4px;
  }

  .section-container__image-right {
    left: -4px;
  }
  .text-box__white-right,
  .text-box__blue-right {
    right: 8px;
    top: 16px;
  }

  .text-box__white-left,
  .text-box__blue-left {
    left: 8px;
    top: 16px;
  }
}

@media screen and (min-width: 430px) and (max-width: 589px) {

  .section-container__column-left,
  .section-container__column-right {
    row-gap: 32px;
  }

  .section-container__illustration-right {
    flex-wrap: wrap-reverse;
  }

  @media screen and (min-width: 574px) and (max-width: 589px) {
    .section-container__image-left {
      left: 4px;
    }
    .section-container__image-right {
      left: -4px;
    }
    .text-box__white-right,
    .text-box__blue-right {
      right: 8px;
      top: 16px;
    }

    .text-box__white-left,
    .text-box__blue-left {
      left: 8px;
      top: 16px;
    }
  }
}


@media screen and (min-width: 429px) and (max-width: 768px) {
  
  h1 {
    font-size: 1.5rem;
    padding: 32px 32px 16px 32px;
  }

  .section-container {
    gap: 40px;
  }
}

@media screen and (min-width: 376px) and (max-width: 428px) {

  h1 {
    font-size: 1.375rem;
  }

  .section-container {
    gap: 40px;
  }

  .section-container__column-left,
  .section-container__column-right {
    row-gap: 24px;
  }
}

@media screen and (max-width: 375px) {
  h1 {
    font-size: 1.25rem;
    padding: 32px 24px 16px 24px;
  }

  .section-container {
    font-size: 0.9375rem;
    gap: 24px;
  }

  .section-container__column-left,
  .section-container__column-right {
    row-gap: 8px;
  }

  .section-container__column-left,
  .section-container__column-right {
    row-gap: 24px;
  }
}

</style>
