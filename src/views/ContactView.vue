<template>
  <div class="page-container">
    <div class="page-container__content">
      <header-content />
      <section class="contact-message">
        <h1 class="contact-message__text">Contact</h1>
        <p>Heeft u interesse of heeft u vragen? Neem gerust contact op.</p>
      </section>
      <div class="flex-container">
        <div class="flex-container__flex-item--form">
          <contact-form />
        </div>
        <div class="seperator"></div>
        <div class="flex-container__flex-item--contact-information">
          <contact-information />
        </div>
      </div>
    </div>
    <footer-content class="footer" />
  </div>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInformation from "@/components/ContactInformation.vue";
import FooterContent from "@/components/FooterContent.vue";

export default {
  name: "ContactView",
  components: {
    HeaderContent,
    ContactForm,
    ContactInformation,
    FooterContent,
  },
};
</script>
<style>
.contact-message {
  text-align: center;
}

.contact-message__text {
  margin: 32px 0 40px 0;
}

.flex-container {
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: row-reverse;
  width: 75vw;
  max-width: 1152px;
}

.flex-container__flex-item--contact-information {
  flex-grow: 1;
  width: 40vw;
}

.flex-container__flex-item--form {
  flex-grow: 1;
  width: 60vw;
}

.seperator {
  margin: 0 70px;
  flex-grow: 0;
  border-left: 1px solid #0000006b;
  height: auto;
}

.page-container {
  position: relative;
  min-height: 100vh;
}

.page-container__content {
  padding-bottom: 2.5rem;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

@media screen and (min-width: 600px) and (max-width: 1024px) {
  .seperator {
    display: none;
  }
}
</style>
