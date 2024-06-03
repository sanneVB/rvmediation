<template>
  <header-content />
  <section class="contact-message">
    <h1>Contact</h1>
    <p>Heeft u interesse of heeft u vragen? Neem gerust contact op.</p>
  </section>
  <div class="grid-container">
    <div class="grid-container__grid-item grid-container__contact-information">
      <contact-information />
      <div class="seperator"></div>
    </div>
    <div class="grid-container__grid-item grid-container__form">
      <contact-form />
    </div>
  </div>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";
import ContactForm from "@/components/ContactForm.vue";
import ContactInformation from "@/components/ContactInformation.vue";

export default {
  name: "ContactView",
  components: {
    HeaderContent,
    ContactForm,
    ContactInformation,
  },
};
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
  margin-top: 40px;
}

.contact-message {
  text-align: center;
}

.grid-container__contact-information {
  padding-left: 17vw;
  grid-column: span 2;
  display: flex;
  justify-content: space-between;
}

.grid-container__form {
  padding-right: 15vw;
  padding-left: 5.57vw;
  grid-column: span 3;
}

.contact-message > h1 {
  margin: 32px 0 40px 0;
}

.seperator {
  border-left: 1px solid #7e7e7e;
  height: 400px;
}

@media screen and (min-width: 600px) and (max-width: 768px) {
  .seperator {
    display: hidden;
  }
}
</style>
