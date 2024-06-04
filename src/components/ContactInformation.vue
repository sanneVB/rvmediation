<template>
  <div class="contact-information">
    <h3>RVmediation</h3>
    <p class="text__contact-information">Lierop, Noord-Brabant</p>
    <div class="contact-information__phone-email">
      <p class="text__contact-information">
        <span class="text__contact-information--bold">Telefoon:</span> 06 481
        889 92
      </p>
      <p class="text__contact-information">
        <span class="text__contact-information--bold">E-mail:</span
        ><a href="mailto:info@rvmediation.nl" class="link"
          >info@rvmediation.nl</a
        >
      </p>
    </div>
    <iframe
      class="contact-information__map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79604.38904309933!2d5.58710948766027!3d51.42809159488991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c725ac943f2a81%3A0x3ef9b112e6b1d89c!2sLierop!5e0!3m2!1sen!2snl!4v1717489916726!5m2!1sen!2snl"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    <p class="text__contact-information--small">
      <span class="text__contact-information--bold">KVK:</span> 758.267.04 •
      <span class="text__contact-information--bold">BTW:</span>
      NL.001.891.693.B82
    </p>
  </div>
</template>
<script>
export default {
  name: "ContactInformation",
};
</script>
<style scoped>
.contact-information__phone-email {
  padding: 25px 0;
}

.link:link {
  color: black;
}

.text__contact-information {
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-variation-settings: "slnt" 0;
}

.text__contact-information--small {
  text-align: center;
  font-size: 10px;
}

.text__contact-information--bold {
  font-weight: 700;
}

.contact-information__map {
  margin-bottom: 25px;
  width: 100%;
  aspect-ratio: 4 / 3;
}
</style>
