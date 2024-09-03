<template>
<div class="page-container">
  <h1>Wat zeggen anderen over mij?</h1>
  <div class="section-container">
    <ReviewCard v-for="(reviewers, x) in reviewers" :key="x"
      v-bind:reviewers="reviewers"
    />
  </div>
</div>
<ContactBox></ContactBox>
</template>
<script>
import ContactBox from "@/components/ContactBox.vue";
import ReviewCard from "@/components/ReviewCard.vue";

export default {
  name: "TestimonialsPage",
  components: {
    ReviewCard,
    ContactBox
  },
  data() {
    return {
      reviewers: [
        {
          name: "anoniem",
          residence: "",
          date: "01-01-1970",
          reviewText:
          "Rob is een vriendelijke en geduldige man. De samenwerking die ik met hem gehad heb, was heel fijn. Hij nam de tijd en energie om me nieuwe dingen te leren. Daarbij legde hij alles goed uit zodat ik het begreep. Zijn eerlijkheid en aanmoediging zijn de dingen die ik het meest heb gewaardeerd. Hij geeft je de energie die je nodig hebt en ziet wanneer de rust van toepassing is."
        },
        {
          name: "anoniem",
          residence: "",
          date: "01-01-1970",
          reviewText:
          'Het samenwerken met Rob was zeer prettig en ongedwongen, eerlijk en respectvol naar elkaar toe. Hij is heel doel- en oplossingsgericht.'
        },
        // {
        //   name: "Sjors",
        //   residence: "",
        //   date: "01-01-1970",
        //   reviewText:
        //   '<span style="color: red">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed elit nulla. Curabitur aliquet, ipsum sed porttitor vulputate, urna risus facilisis augue, vel tempus libero neque non libero. Mauris ultricies.</span>'
        // },
        // { 
        //   name: "",
        //   residence: "",
        //   date: "01-01-1970",
        //   reviewText:
        //   '<span style="color: red">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, turpis vel vestibulum vestibulum, purus justo dictum massa, in euismod massa ante ac ante. Donec sed facilisis lectus. Pellentesque malesuada elit nec tincidunt dignissim. Nunc velit tortor, placerat nec ultrices sed, hendrerit sit amet sapien. Vivamus a ligula nisi. Vestibulum.</span>'
        // },
      ]
    }
  }
};
</script>
<style scoped>
.page-container {
    min-height: calc(100dvh - 277px - 80px);
}
</style>