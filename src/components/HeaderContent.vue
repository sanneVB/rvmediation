<template>
  <header :class="{ 'header--no-background': isVisible }">
    <div class="header-container">
      <a href="./#landing">
        <img
          :class="{ 'header__image--hidden': isVisible }"
          class="header__image"
          src="../assets/rvmediation-logo.svg"
          alt="logo van rvmediation"
        />
      </a>
      <NavigationMenu />
    </div>
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
a {
  margin-left: auto;
  margin-right: auto;
  /* padding om hem exact hetzelfde uit te lijnen met het logo op de landingpagina */
  /* padding-left: 32px; */
}

header {
  background-color: #001526;
  box-shadow: 0px 6px 12px rgba(0,0,0,0.33);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  align-items: center;
  padding: 12px 3%;
  position: sticky;
}

.header__image {
  height: 56px;
}

.header__image--hidden {
  opacity: 0;
}

.header--no-background {
  background-color: #00152600;
  box-shadow: 0px 6px 12px rgba(0,0,0,0);
}

  @media screen and (max-width: 599px) {
    .header__image {
      height: 53px;
    }
  }
</style>
