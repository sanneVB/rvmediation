<template>
  <navigation-menu/>

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

  .button-nav {
    border: 2px solid #FFFF;
    border-radius: 5px;
    background-color: transparent;
    padding: 4px 8px;
    z-index: 2;
    position: sticky;
  }

  .button-nav__bar {
    width: 24px;
    height: 2px;
    background-color: #FFFFFF;
    margin: 6px 0;
    transition: 0.2s;
    border-radius: 4px;
  }

  

</style>

<!--<template>
  <header :class="{ sticky: isSticky }">
    <div class="logo">Mijn Logo</div>
    <nav-component/>
  </header>
</template>

<script>
export default {
  props: {
    isSticky: {
      type: Boolean,
      default: false
    }
  }
};
</script>-->