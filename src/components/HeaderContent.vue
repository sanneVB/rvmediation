<template>
  <button @click="" id="nav-toggle" >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
  </button>
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

  #nav-toggle {
    border: 2px solid #FFFF;
    border-radius: 5px;
    background-color: transparent;
    padding: 4px 8px;
    z-index: 2;
  }

  .bar {
    width: 24px;
    height: 2px;
    background-color: #FFFFFF;
    margin: 6px 0;
    transition: 0.2s;
    border-radius: 4px;
  }

  

</style>