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
      <div class="form__field--message">
        <label for="message" class="text__label text text--bold">Bericht</label>
        <textarea
          type="textarea"
          v-model="message"
          placeholder="Enter Message "
        ></textarea>
      </div>
      <div class="form__container">
        <button type="submit" class="form__container--button text">
          VERZENDEN
        </button>
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
        SecureToken: "", //Als rob's hosting het toelaat hebben we een secure token nodig. Zoniet opzetten via https://smtpjs.com/
        To: "", // Rob's email adress moet hier worden ingevuld
        From: "", // Kan hetzelde zijn als to, maar kan ook specifiek from email voor worden aangemaakt
        name: this.name,
        Subject: this.subject,
        Body: `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`,
      }).then((message) => alert(message));
    },
  },
};
</script>
<style scoped>
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

input,
textarea {
  border: 1px solid #0000006b;
  border-radius: 3px;
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

.form__field--message {
  display: flex;
  flex-direction: column;
}

textarea {
  margin: 16px 0;
}

.form__container {
  text-align: center;
  padding: 0 10px;
  float: right;
  height: 30px;
  border: 1px solid #fb8c00;
  background-color: #fb8c00;
  line-height: 30px;
}

.form__container--button {
  color: #ffffff;
}
</style>
