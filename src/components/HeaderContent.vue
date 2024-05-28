<template>
  <header :class="{ 'header--no-background': isVisible }" class="header">
    <img
      :class="{ 'header__image--hidden': isVisible }"
      class="header__image"
      src="../assets/rv-mediation-logo.svg"
      alt="logo van rvmediation"
    />
    <NavigationMenu />
  </header>
</template>

<script>
import NavigationMenu from "./NavigationMenu.vue";

export default {
  name: "HeaderContent",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    NavigationMenu,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  padding: 12px 3%;
  position: sticky;
  top: 0;
  background-color: #001526;
  z-index: 1000;
}

.header__image {
  opacity: 100;
  width: 224px;
  margin-left: auto;
  margin-right: auto;
}

.header__image--hidden {
  opacity: 0;
}

.header--no-background {
  background-color: #00152600;
}
</style>
