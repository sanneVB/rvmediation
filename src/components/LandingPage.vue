<template>
  <div class="grid-container">
    <div class="grid-container__grid-item">
      <h1 class="red-hat-text-rob">
        ROB<br />
        Verbeek
      </h1>
      <h2></h2>
    </div>
    <div class="grid-container__grid-item">
      <img
        class="grid-container__image--rv"
        src="../assets/rv-mediation-logo.svg"
        alt="logo van rvmediation"
        ref="observedElement"
      />
    </div>
    <div class="grid-container__grid-item">
      <div class="grid-container__grid-content">
        <carrousel-content class="grid-container__p" />
        <!-- <p class="grid-container__p">"doortastend"</p> -->
        <div class="grid-container__grid-text-image">
          <a href="/nmv">
            <p class="grid-container__text-1">RVmediation is lid van</p>
            <img
              class="grid-container__image--nmv-1"
              src="../assets/rv-mediation-nmv-logo.png"
              alt="logo van de nmv"
            />
          </a>
        </div>
      </div>
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
.red-hat-text-rob {
  font-family: "Red Hat Text", sans-serif;
  font-optical-sizing: auto;
  font-weight: normal;
  font-style: normal;
  font-size: 80px;
}

.grid-container {
  position: relative;
  margin-top: -80px; /*Dit haalt de wit ruimte weg boven het de landingpage*/
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  background-image: url("../assets/rvmediation-hero.webp");
  background-color: #001526;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
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
  padding-bottom: 34px;
}

/* .grid-container__p {
    font-size: 1.75rem;
    color: #fb8c00;
    font-weight: 700;
    font-style: italic;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    padding: 10px 10px;
  } */

.grid-container__grid-text-image {
  position: absolute;
  right: 3%;
  bottom: 4%;
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
  height: 56px;
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

@media screen and (max-width: 599px) {
  .grid-container__grid-text-image {
    position: static;
  }

  .grid-container__image--nmv-1 {
    padding-left: 22px;
    height: 32px;
  }

  .grid-container__text-1 {
    font-size: 0.563rem;
  }

  h1 {
    font-size: 4rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: -23px;
    padding-left: 2px;
  }

  h2 {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }

  .grid-container__image--rv {
    height: 53px;
  }

  .grid-container__image--nmv {
    height: 36px;
  }

  /* .grid-container__p {
      font-size: 1.375rem;
      margin-bottom: 24px;
    } */
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

  .grid-container__image--nmv-1 {
    padding-left: 5px;
    height: 36px;
  }

  .grid-container__text-1 {
    font-size: 0.625rem;
  }

  .grid-container__image--nmv-2 {
    height: 36px;
  }

  /* .grid-container__grid-item:nth-of-type(2) > div > p {
      font-size: 1.625rem;
    }

    .grid-container__p {
      font-size: 1.625rem;
    } */
}
</style>
