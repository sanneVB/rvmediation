<template>
<div class="page-container">
  <h1>Wat kan ik voor u betekenen als werknemer?</h1>
  <div class="section-container">
    <div class="section-container__column-left">
      <div>
        <P>Voor de werknemers is het vooral van belang dat zij in een prettige omgeving kunnen werken. Maar dit is niet altijd het geval waardoor men zich soms niet gewaardeerd en begrepen voelt. Dit kan een conflict tot gevolg hebben.</p>
      </div>
      <div class="section-container__illustration-left">
        <img
          class="section-container__image-left"
          src="../assets/rvmediation-employee-driver-stepin.jpg"
          alt="picture of a truck on the road"
        />
        <p class="text-box__blue-right">“...door de uitvoerige coaching op maat was in vier sessies het grijze gebied opgehelderd en ben ik nu op mijn plaats...”</p>
      </div>
    </div>
    <div class="section-container__column-right">
      <div class="section-container__illustration-right">
        <p class="text-box__blue-left">“Door Rob zijn goede inlevingsvermogen en coaching ben ik weer op de goede weg.”</p>
        <img
          class="section-container__image-right"
          src="../assets/rvmediation-employee-driver-cabin.jpg"
          alt="picture of a truck in the city at twilight"
        />
      </div>
      <div>
        <P>Door mijn jarenlange ervaring in de logistieke sector ben ik zeer bekend met de cultuur die daar is, en daardoor kan ik ook mijzelf goed inleven in de mensen die daar actief zijn. Door mijn openheid en transparantie kan ik daardoor mensen makkelijk helpen in de situatie waar zij in zitten.</p>
      </div>
    </div>
  </div>
</div>
<ContactBox></ContactBox>
</template>
<script>
import ContactBox from "@/components/ContactBox.vue";

export default {
  name: "EmployeePage",
  components: {
    ContactBox
  }
};
</script>
<style scoped></style>