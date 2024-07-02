<template>
  <footer>
    <div class="footer-container">
      <div></div>
      <div class="footer__content-center">
        <p>
          Copyright &copy; {{ currentYear }}, RVmediation<br />
          <router-link to="/algemenevoorwaarden"
            >Algemene Voorwaarden</router-link
          >
          | <router-link to="/privacystatement">Privacy Statement</router-link>
        </p>
      </div>
      <div class="footer__content-right">
        <a class="link__page-nmv" href="./nmv">
          <p class="text__align-right text--semibold text--italic">Lid van</p>
          <img src="../assets/nmv-logo.png" alt="logo van NMv" height="32px" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterContent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<style scoped>
footer {
  color: #ffffff;
  height: 80px;
  font-size: 0.875rem;
  background-color: #00aeb8;
}

p {
  color: #fff;
  text-align: center;
  padding-bottom: 6px;
}

a {
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
}

.footer__content-center {
  justify-self: center;
  padding-top: 16px;
}

.footer__content-right {
  justify-self: right;
  padding-top: 6px;
  padding-right: 24px;
}

.text__align-right {
  text-align: right;
}

a.link__page-nmv:hover {
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  footer {
    font-size: 0.75rem;
    height: 128px;
  }

  .footer-container {
    grid-template-columns: 1fr;
  }

  .footer__content-right {
    justify-self: center;
    padding-top: 8px;
    order: -1;
    padding-right: 0;
  }

  .member-of-nmv {
    text-align: center;
  }

  .text__align-right {
    text-align: center;
  }
}
</style>
