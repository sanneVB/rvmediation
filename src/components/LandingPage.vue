<template>
  <div class="page-container grid-container">
    <div class="grid-container__grid-item">
      <h1>
        <span class="text__main-title-L1">ROB<br /></span>
        <span class="text__main-title-L2">Verbeek</span>
      </h1>
    </div>
    <div class="grid-container__grid-item">
      <img
        class="grid-container__image--rv"
        src="../assets/rvmediation-logo.svg"
        alt="logo van rvmediation"
        ref="observedElement"
      />
    </div>
    <div class="grid-container__grid-item background-overlay__bottom">
      <carrousel-content class="grid-container__p" />
      <a class="grid-container__grid-text-image" href="/nmv">
        <p class="grid-container__text text--italic text--semibold">Lid van</p>
        <img
          class="grid-container__image--nmv"
          src="../assets/rvmediation-nmv-logo.png"
          alt="logo van de nmv"
        />
      </a>
    </div>
  </div>
</template>

<script>
import CarrouselContent from "./CarrouselContent.vue";

export default {
  name: "LandingPage",
  components: {
    CarrouselContent,
  },
  mounted() {
    this.createObserver();
  },
  methods: {
    createObserver() {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver(this.handleIntersect, options);
      observer.observe(this.$refs.observedElement);
    },
    handleIntersect(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.$emit("changeVisibility", true);
        } else {
          this.$emit("changeVisibility", false);
        }
      });
    },
  },
};
</script>

<style scoped>
.grid-container {
  position: relative;
  margin-top: -80px; /*Dit haalt de wit ruimte weg boven het de landingpage*/
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  height: 100dvh;
}

.grid-container__grid-item:nth-of-type(1) {
  padding: 0 3%;
}

.grid-container__grid-item:nth-of-type(2) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container__grid-item:nth-of-type(3) {
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 54px;
}

.grid-container__grid-text-image {
  position: absolute;
  right: 3%;
  bottom: 4%;
}

a {
  text-decoration: none;
}

h1 {
  color: #fff;
  font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  text-align: start;
  padding: 16px;
  line-height: 1;
}

p {
  color: white;
}

.text__main-title-L1 {
  font-size: 5rem;
  margin-left: -5px;
}

.text__main-title-L2 {
  font-size: 2.375rem;
  letter-spacing: 0.05rem;
}

.grid-container__image--rv {
  height: 56px;
}

.grid-container__image--nmv {
  height: 48px;
}

.grid-container__text {
  font-size: 0.75rem;
  padding-bottom: 12px;
  text-align: right;
}

@media screen and (max-width: 768px) {
  .grid-container__grid-item:nth-of-type(3) {
    padding-bottom: 50px;
  }

  .text__main-title-L1 {
    font-size: 4rem;
    margin-left: -5px;
  }

  .text__main-title-L2 {
    font-size: 1.875rem;
    letter-spacing: 0.06rem;
  }

  .grid-container__image {
    height: 53px;
  }

  .grid-container__text {
    font-size: 0.625rem;
  }

  .grid-container__image--nmv {
    height: 40px;
  }
}

@media screen and (max-width: 599px) {
  .grid-container__grid-item:nth-of-type(3) {
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding-bottom: 24px;
  }

  .text__main-title-L1 {
    font-size: 3rem;
    margin-left: -4px;
  }

  .text__main-title-L2 {
    font-size: 1.375rem;
    letter-spacing: 0.05rem;
  }

  .grid-container__grid-text-image {
    position: static;
  }

  .grid-container__image--nmv {
    height: 32px;
  }

  .grid-container__text {
    font-size: 0.625rem;
    text-align: center;
  }

  .grid-container__image--rv {
    height: 53px;
  }
}
</style>
