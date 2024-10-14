<template>
  <div class="wrapper">
    <HeaderContent></HeaderContent>
    <div class="page-container wrapper__content">
      <div class="wrapper__content--information">
        <h1>Wat doet een mediator?</h1>
        <div class="page-container__content">
          <div class="page-container__image">
            <img
              class="page-image"
              src="../assets/rvmediation-mediator-handshake.jpg"
              alt="Foto van twee mensen die handen schudden"
            />
          </div>
          <div>
            <p>
              Mediation is een vorm van conflictbemiddeling. De mediator
              begeleidt gesprekken, zodat u weer met elkaar in gesprek komt.
              Door mediation wordt u geholpen door een professionele en
              onafhankelijke mediator. De mediator zal er voor zorgen dat u op
              uw gemakt gesteld word en zorgt dat de communicatie weer op gang
              komt. Ook word het conflict in een breder perspectief geplaatst,
              zo werkt u naar een aanvaardbare oplossing voor beide partijen.
            </p>
            <p>
              Tijdens de mediation denkt en werkt u zelf mee aan een
              aanvaardbare oplossing. Hierdoor kunt u uiteindelijk zelf een
              overwogen beslissing nemen. Dit bespaart u een hoop negativiteit,
              maar ook voorkomt u hiermee een juridisch proces. Dit betekent
              minder hoge (juridische) kosten en er blijft veel tijd bespaart.
            </p>
          </div>
        </div>
      </div>
      <ContactBox></ContactBox>
    </div>
    <FooterContent></FooterContent>
  </div>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";
import FooterContent from "@/components/FooterContent.vue";
import ContactBox from "@/components/ContactBox.vue";

export default {
  name: "NmvView",
  components: {
    ContactBox,
    HeaderContent,
    FooterContent,
  },
};
</script>
<style scoped>

* {
  background-color: #FDFDFD;
}

.page-container__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 48px;
}

.page-container__image {
  border-radius: 16px;
  justify-self: center;
}

.page-image {
  border-radius: 16px;
  width: 360px;
}

/* Necessary for contact box to stick above foooter instead of directly below text */
.wrapper__content {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.page-container__content,
.box-container {
  width: 70vw;
}

@media screen and (min-width: 769px) and (max-width: 1072px) {

  .page-container__content {
    gap: 64px;
  }
}

/* scroll snap will be activated for tables and smartphones */
@media screen and (max-width: 768px) {

  .page-container__content,
  .box-container {
    width: 75vw;
  }

  h1 {
    font-size: 1.5rem;
    padding: 32px 0px 16px 0px;
  }

  .page-container__content {
    grid-template-columns: auto;
  }
}

@media screen and (max-width: 428px) {

  .page-container__content,
  .box-container {
    width: 85vw;
  }
  
  .page-container__content {
    gap: 40px;
  }
}

@media screen and (max-width: 375px) {
  h1 {
    font-size: 1.375rem;
    padding: 32px 0px 16px 0px;
  }

  .page-container__content {
    font-size: 0.9375rem;
  }
}
</style>
