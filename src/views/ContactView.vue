<template>
  <header-content />
  <div class="page-container">
    <div class="page-container__content">
      <section class="contact-message">
        <h1 class="contact-message__text">Contact</h1>
        <p>
          Heeft u interesse of heeft u vragen?
          Neem&nbsp;gerust&nbsp;contact&nbsp;op.
        </p>
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
  </div>
  <footer-content class="footer" />
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
  max-width: 950px;
}

.flex-container__flex-item--contact-information {
  width: 40vw;
}

.flex-container__flex-item--form {
  width: 60vw;
}

.seperator {
  margin: 0 70px;
  flex-grow: 0;
  border-left: 1px solid #0000006b;
  height: auto;
}

@media screen and (min-width: 600px) and (max-width: 1024px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }

  .flex-container__flex-item--contact-information {
    width: auto;
  }

  .seperator {
    margin: 30px 0;
    flex-grow: 0;
    border-left: none;
    border-top: 1px solid #0000006b;
    height: 0;
    width: 75vw;
  }
}

@media screen and (max-width: 600px) {
  .seperator {
    margin: 30px 0;
    flex-grow: 0;
    border-left: none;
    border-top: 1px solid #0000006b;
    height: 0;
    width: 85vw;
  }

  .flex-container {
    flex-direction: column;
    margin: 0;
    align-items: center;
    width: 85vw;
  }

  .page-container__content {
    width: 85vw;
  }

  .flex-container__flex-item--form {
    width: 85vw;
  }

  .flex-container__flex-item--contact-information {
    width: 66vw;
  }
}
</style>
