<template>
  <div class="wrapper">
    <header-content />
    <div class="page-container page__minus-header-footer wrapper__content">
      <h1 class="contact-message__text">Contact</h1>
      <div class="page-container__content">
        <section class="contact-message">
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
<style scoped>

* {
  background-color: #FDFDFD;
}

.contact-message {
  text-align: center;
}

.flex-container {
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: row-reverse;
}

.seperator {
  margin: 0 70px;
  flex-grow: 0;
  border-left: 1px solid #0000006b;
  height: auto;
}

@media screen and (min-width: 1024px) {
  .flex-container__flex-item--contact-information {
    width: 40vw;
  }

  .flex-container__flex-item--form {
    width: 60vw;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0;
  }

  .flex-container__flex-item--form {
    width: 66vw;
  }

  .seperator {
    margin-top: 72px;
    margin-bottom: 72px;
    flex-grow: 0;
    border-left: none;
    border-top: 1px solid #0000006b;
    height: 0;
    width: 75vw;
  }
}

@media screen and (max-width: 768px) {
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
  }

  .flex-container__flex-item--contact-information {
    width: 66vw;
  }

  h1 {
    font-size: 1.5rem;
    padding: 32px 32px 16px 32px;
  }

  .page__minus-header-footer {
    min-height: calc(100vh - 208px);
  }
}

@media screen and (max-width: 375px) {
  .page-container__content,
  .section-container,
  .box-container {
    width: auto;
  }

  .page-container__content {
    font-size: 0.9375rem;
    margin-left: 8px;
    margin-right: 8px;
  }

  .seperator {
    width: 90vw;
  }
}
</style>
