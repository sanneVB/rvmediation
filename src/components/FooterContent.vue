<template>
  <footer>
    <p>Copyright &copy; {{ currentYear }}, RVmediation | <router-link to="/algemenevoorwaarden">Algemene Voorwaarden</router-link> | <router-link to="/privacystatement">Privacy Statement</router-link></p>
    <div class="logoNMV">
      <p class="inter inter--semi-bold inter--italic">Lid van</p><img src="../assets/nmv-logo.png" height="32px"/>
    </div>
  </footer>
</template>

<script>

  export default {
    name: 'FooterContent',
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
    
  };
</script>

<style scoped>
  footer {
    background-color: #00AEB8;
    height: 80px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #FFFFFF;
    flex: 1;
    text-align: center;
  }

  a {
    color: #ffffff;
  }

  .logoNMV {
    position: absolute;
    right:32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .logoNMV > p {
    text-align: end;
    margin: 0;
    font-size: x-small;
    margin-bottom: 8px;
  }

</style>