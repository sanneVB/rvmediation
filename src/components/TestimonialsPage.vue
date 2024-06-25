<template>
  <div class="page-container">
    <h1>Wat zeggen anderen over mij?</h1>
    <div class="section-container">
      <div class="review-content">
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
        <ReviewCard></ReviewCard>
      </div>
    </div>
    <ContactBox></ContactBox>
  </div>
</template>
<script>
import ContactBox from "@/components/ContactBox.vue";
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  name: "TestimonialsPage",
  components: {
    ReviewCard,
    ContactBox
  }
};
</script>
<style scoped>
.review-content {
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  justify-content: center;
}
</style>
