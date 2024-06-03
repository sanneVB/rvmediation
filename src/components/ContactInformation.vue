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
    <img
      src="../assets/rv-mediation-location-map.png"
      width="248px"
      height="186px"
    />
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
img {
  object-fit: cover;
  border-radius: 8px;
}

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

img {
  margin-bottom: 25px;
}
</style>
