<template>

  <header class="header">
    <img class="header__image" src="../assets/rv-mediation-logo.svg" alt="logo van rvmediation">
    <NavigationMenu />
  </header>

</template>

<script>
import NavigationMenu from './NavigationMenu.vue'

export default {
  
  components: {
    NavigationMenu
  }
}
</script>

<style scoped>

  .header {
    display: flex;
    align-items: center;
    padding: 12px 3%;
    position: sticky;
    top: 0;
    background-color:  #001526;
    z-index: 1000;
  }

  .header__image {
    height: 56px;
    width: 224px;
    margin-left: auto;
    margin-right: auto;
    /* padding om hem exact hetzelfde uit te lijnen met het logo op de landingpagina */
    padding-left: 32px;
  }

  @media screen and (max-width: 599px) {
    .header__image {
      height: 53px;
    }
  }

</style>