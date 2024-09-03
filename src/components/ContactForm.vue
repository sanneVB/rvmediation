<template>
  <div class="container">
    <form action="" class="form" @submit.prevent="sendEmail">
      <div class="form__fields">
        <div class="form__field form__field--name">
          <label for="name" class="text__label text text--bold">Naam</label>
          <input type="text" v-model="name" />
        </div>
        <div class="form__field form__field--email">
          <label for="email" class="text__label text text--bold"
            >E-mailadres</label
          >
          <input type="email" v-model="email" class="" />
        </div>
        <div class="form__field form__field--subject">
          <label for="subject" class="text__label text text--bold"
            >Onderwerp</label
          >
          <input type="text" v-model="subject" />
        </div>
      </div>
      <div class="form__message">
        <label
          for="message"
          class="text__label text text--bold form__message--label"
          >Bericht</label
        >
        <textarea
          type="textarea"
          v-model="message"
          placeholder="Enter Message "
        ></textarea>
      </div>
      <div class="form__button">
        <button type="submit" class="form__button--text text">Verzenden</button>
      </div>
    </form>
  </div>
</template>
<script>
import { Email } from "@/assets/smtp/smtp.js";

export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      Email.send({
        SecureToken: "cd324757-6f6d-438c-bcaf-5c0fdd712828", //Als rob's hosting het toelaat hebben we een secure token nodig. Zoniet opzetten via https://smtpjs.com/
        To: "info@rvmediation.nl", // Rob's email adress moet hier worden ingevuld
        From: "contact_form@rvmediation.nl", // Kan hetzelde zijn als to, maar kan ook specifiek from email voor worden aangemaakt
        name: this.name,
        Subject: this.subject,
        Body: `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`,
      }).then((message) => alert(message));
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.form__fields {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 128px;
  margin: 24px 0;
}

.form__field {
  display: flex;
  align-items: center;
}

.form__field > label {
  min-width: 90px;
}

input,
textarea {
  border: 1px solid #0000006b;
  border-radius: 3px;
  padding: 0 4px;
}

input:focus,
textarea:focus {
  outline-color: #fb8c00;
}

input {
  flex-grow: 1;
  height: 32px;
}

label {
  flex-grow: 1;
  max-width: 94px;
}

.text__label {
  font-size: 12px;
}

.form__message {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.form__message--label {
  flex-grow: 0;
}

textarea {
  margin: 16px 0;
  flex-grow: 1;
  min-height: 98px;
}

.form__button {
  margin-left: auto;
}

.form__button--text {
  background-color: #fb8c00;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  padding: 6px 16px;
  text-align: center;
  color: #ffffff;
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  textarea {
    min-height: 128px;
  }

  .form__button {
    margin-right: auto;
  }
}

@media screen and (min-width: 375px) and (max-width: 768px) {
  .form__button {
    margin-right: auto;
  }
}

@media screen and (max-width: 375px) {
  .form__field {
    display: flex;
    flex-wrap: wrap;
  }

  .form__button {
    margin-right: auto;
  }
}
</style>
