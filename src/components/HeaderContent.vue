<template>

  <header class="header">
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
    position: sticky;
    top: 0;
    background-color: #ffffff;
    z-index: 1000;
  }

</style>