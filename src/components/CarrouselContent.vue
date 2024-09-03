<template>
  <div class="carrousel">
    <transition name="fade" mode="out-in">
      <p class="text__carrousel text--italic text--bold" :key="currentValue">{{ currentValue }}</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: "CarrouselContent",
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
  created() {
    this.startcarrousel();
  },
  beforeUnmount() {
    if (this.carrouselInterval) {
      clearInterval(this.carrouselInterval);
    }
  },
  methods: {
    startcarrousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.coreValues.length;
      }, 3000);
    },
  },
};
</script>
<style scoped>
.carrousel {
  font-size: 1.75rem;
  text-align: center;
}

.text__carrousel {
  width: 367px;
  color: #fb8c00;
  padding: 6px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 768px) {

  .grid-container__p {
    font-size: 1.625rem;
  }
}

@media screen and (max-width: 599px) {

  .grid-container__p {
    font-size: 1.375rem;
    margin-bottom: 24px;
  }

    .text__carrousel {
    width: initial;
    background-image: none;
  }
}
</style>
