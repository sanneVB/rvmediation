<template>
  <div class="grid-container">
    <div class="grid-container__grid-item">
      <h1>ROB</h1>
      <h2>Verbeek</h2>
    </div>
    <div class="grid-container__grid-item"></div>
    <div class="grid-container__grid-item"></div>
    <div class="grid-container__grid-item"></div>
    <div class="grid-container__grid-item">
      <img
        class="grid-container__image--rv"
        src="../assets/rv-mediation-logo.svg"
        alt="logo van rvmediation"
        ref="observedElement"
      />
    </div>
    <div class="grid-container__grid-item"></div>
    <div class="grid-container__grid-item"></div>
    <div class="grid-container__grid-item">
      <div class="carousel">
        <p class="text__carousel">“open en eerlijk”</p>
        <div class="grid-container__grid-text-image">
          <p class="grid-container__text-1">RVmediation is lid van</p>
          <img
            class="grid-container__image--nmv-1"
            src="../assets/rv-mediation-nmv-logo.png"
            alt="logo van de nmv"
          />
        </div>
      </div>
    </div>
    <div class="grid-container__grid-item">
      <div class="grid-container__grid-text-image">
        <p class="grid-container__text-2">RVmediation is lid van</p>
        <img
          class="grid-container__image--nmv-2"
          src="../assets/rv-mediation-nmv-logo.png"
          alt="logo van de nmv"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      coreValues: [
        "“doortastend”",
        "“bruggenbouwer”",
        "“professioneel”",
        "“open en eerlijk”",
        "“rustig”",
        "“meedenkend”",
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentValue() {
      return this.coreValues[this.currentIndex];
    },
  },
  mounted() {
    this.createObserver();
  },
  created() {
    this.startCarousel();
  },
  beforeUnmount() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
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
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.coreValues.length;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.grid-container {
  margin-top: -80px; /*Dit haalt de wit ruimte weg boven het de landingpage*/
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-image: url("../assets/rvmediation-hero.webp");
  background-color: rgb(1, 1, 39);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
}

.grid-container__grid-item:nth-of-type(1) {
  padding: 0 9%;
}

.grid-container__grid-item:nth-of-type(5) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-container__grid-item:nth-of-type(8) {
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 37px;
}

/* .grid-container__grid-item:nth-of-type(8) > div > p {
  font-size: 1.75rem;
  color: #fb8c00;
  font-weight: 700;
  font-style: italic;
  background-color: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding: 10px 10px;
} */

.carousel {
  font-size: 1.75rem;
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 0%,
    rgba(1, 1, 1, 0.6) 20%,
    rgba(1, 1, 1, 0.6) 80%,
    rgba(0, 0, 0, 0) 100%
  );
  text-align: center;
  padding: 10px 10px;
}

.text__carousel {
  width: 250px;
  color: #fb8c00;
  font-weight: 700;
  font-style: italic;
}

.grid-container__grid-item:nth-of-type(9) {
  display: flex;
  justify-content: end;
  align-items: end;
  padding-bottom: 37px;
  padding-right: 9%;
}

h1,
h2 {
  color: #fff;
}

h1 {
  font-size: 5rem;
  margin-bottom: -35px;
}

h2 {
  font-size: 2.25rem;
  letter-spacing: 0.3rem;
  padding-left: 5px;
}

p {
  color: white;
}

.grid-container__image--rv {
  height: 55px;
}

.grid-container__image--nmv-1,
.grid-container__image--nmv-2 {
  height: 48px;
}

.grid-container__text-1,
.grid-container__text-2 {
  font-size: 0.75rem;
  padding-bottom: 12px;
  text-align: center;
  font-weight: bold;
  font-style: italic;
}

.grid-container__image--nmv-1,
.grid-container__text-1 {
  display: none;
}

@media screen and (max-width: 599px) {
  .grid-container {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
  }

  .grid-container__grid-item:nth-of-type(9) {
    display: none;
  }

  .grid-container__grid-text-image {
    padding-top: 40px;
  }

  .grid-container__image--rv {
    margin-top: -50px;
  }

  .grid-container__image--nmv-1,
  .grid-container__text-1 {
    display: block;
  }

  .grid-container__image--nmv-1 {
    padding-left: 16px;
  }

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  .grid-container__image--rv {
    height: 53px;
  }

  .grid-container__image--nmv {
    height: 36px;
  }

  .grid-container__grid-item:nth-of-type(8) > p {
    font-size: 1.625rem;
  }
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  .grid-container__image {
    height: 53px;
  }

  .grid-container__image--nmv-2 {
    height: 36px;
  }

  .grid-container__grid-item:nth-of-type(8) > p {
    font-size: 1.625rem;
  }
}
</style>
