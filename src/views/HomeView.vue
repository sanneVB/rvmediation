<template>
  <div class="wrapper">
    <header-content :isVisible="isVisible" />
    <div class="wrapper__content">
      <section class="container__snapPoint section__landing" id="landing">
        <landing-page @changeVisibility="handleVisibilityChange" />
      </section>
      <section
        class="container__snapPoint section__blue page__minus-header"
        id="introduction"
      >
        <introduction-page />
      </section>
      <section
        class="container__snapPoint section__white page__minus-header"
        id="employee"
      >
        <employee-page />
      </section>
      <section
        class="container__snapPoint section__blue page__minus-header"
        id="employer"
      >
        <employer-page />
      </section>
      <section
        class="container__snapPoint section__white page__minus-header"
        id="about-me"
      >
        <about-me-page />
      </section>
      <section
        class="container__snapPoint section__blue page__minus-header-footer"
        id="testimonials"
      >
        <testimonials-page />
      </section>
    </div>
    <footer-content />
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
html {
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}

section {
  scroll-margin-top: 80px;
  /* Added padding which is a workaround to get a bottom margin at contact box */
  padding-bottom: 1px;
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

.page__minus-header-footer {
  min-height: calc(100dvh - 160px);
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

.section__landing {
  background-image: url("../assets/rvmediation-hero.webp");
  background-color: #001526;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

/* Layout settings for sections */
.section-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
  gap: 80px;
}

.section-container__column-left,
.section-container__column-right {
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-self: center;
}

.section-container__image {
  border-radius: 16px;
  width: 240px;
  height: fit-content;
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
  width: 232px;
  height: fit-content;
}

.text-box__white-right {
  background-color: #fff;
  color: #00aeb8;
  right: 20px;
  top: 16px;
  text-shadow: 2px 4px 6px #d6d6d6;
}

.text-box__white-left {
  background-color: #fff;
  color: #00aeb8;
  left: 20px;
  top: 16px;
  text-shadow: 2px 4px 6px #d6d6d6;
}

.text-box__blue-right {
  background-color: #66ced4;
  color: #fff;
  right: 20px;
  top: 16px;
  text-shadow: 2px 4px 6px #888888;
}

.text-box__blue-left {
  background-color: #66ced4;
  color: #fff;
  left: 20px;
  top: 16px;
  text-shadow: 2px 4px 6px #888888;
}

@media screen and (max-width: 1074px) {
  .section-container__column-right {
    flex-direction: column-reverse;
  }
}

@media screen and ((min-width: 1075px) and (max-width: 1324px)) {
  .section-container__illustration-right {
    flex-wrap: wrap-reverse;
  }

  .section-container__illustration-left {
    flex-wrap: wrap;
  }

  .text-box__white-right,
  .text-box__blue-right {
    right: -20px;
    top: -16px;
  }

  .text-box__white-left,
  .text-box__blue-left {
    left: -20px;
    top: -16px;
  }
}

@media screen and (max-width: 669px) {
  .section-container__illustration-right {
    flex-wrap: wrap-reverse;
  }

  .section-container__illustration-left {
    flex-wrap: wrap;
  }

  .text-box__white-right,
  .text-box__blue-right {
    right: -20px;
    top: -16px;
  }

  .text-box__white-left,
  .text-box__blue-left {
    left: -20px;
    top: -16px;
  }
}

/* scroll snap will be activated for tables and smartphones */
@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    padding: 32px 32px 16px 32px;
  }

  .container__snapPoint {
    scroll-behavior: smooth;
    scroll-snap-align: start;
  }

  .page__minus-header-footer {
    min-height: calc(100vh - 402px);
  }
}

@media screen and (max-width: 428px) {
  h1 {
    font-size: 1.375rem;
  }

  .section-container {
    grid-template-columns: auto;
    gap: 40px;

    margin-left: 24px;
    margin-right: 24px;

    width: 80vw;
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
    width: auto;
  }
}
</style>
