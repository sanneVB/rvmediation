<template>
  <div class="carrousel">
    <transition name="fade" mode="out-in">
      <p class="text__carrousel" :key="currentValue">{{ currentValue }}</p>
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
  padding: 10px 10px;
}

.text__carrousel {
  width: 367px;
  background-image: linear-gradient(
    90deg,
    #00152600 0%,
    #00152699 23%,
    #00152699 78%,
    #00152600 100%
  );
  color: #fb8c00;
  font-weight: 700;
  font-style: italic;
  padding: 3px 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
