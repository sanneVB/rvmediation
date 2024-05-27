<template>
  <section class="app">
    <HeaderContent />
    <router-view/>

  </section>
</template>

<script>
  import HeaderContent from './components/HeaderContent.vue';

  export default {
    name: 'App',
    components: {
      HeaderContent
    }
  }
</script>

<style>
</style>
