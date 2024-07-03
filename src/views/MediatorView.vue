<template>
  <div class="wrapper">
    <HeaderContent></HeaderContent>
    <div class="page-container page__minus-header-footer wrapper__content">
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
            Mediation is een vorm van conflictbemiddeling. De mediator begeleidt
            gesprekken, zodat u weer met elkaar in gesprek komt. Door mediation
            wordt u geholpen door een professionele en onafhankelijke mediator.
            De mediator zal er voor zorgen dat u op uw gemakt gesteld word en
            zorgt dat de communicatie weer op gang komt. Ook word het conflict
            in een breder perspectief geplaatst, zo werkt u naar een
            aanvaardbare oplossing voor beide partijen.
          </p>
          <p>
            Tijdens de mediation denkt en werkt u zelf mee aan een aanvaardbare
            oplossing. Hierdoor kunt u uiteindelijk zelf een overwogen
            beslissing nemen. Dit bespaart u een hoop negativiteit, maar ook
            voorkomt u hiermee een juridisch proces. Dit betekent minder hoge
            (juridische) kosten en er blijft veel tijd bespaart.
          </p>
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

/* .page__minus-header-footer {
  min-height: calc(100dvh - 356px);
} */

/* scroll snap will be activated for tables and smartphones */
@media screen and (max-width: 768px) {
  h1 {
    font-size: 1.5rem;
    padding: 32px 32px 16px 32px;
  }

  .page__minus-header-footer {
    min-height: calc(100vh - 402px);
  }
}

@media screen and (max-width: 428px) {
  h1 {
    font-size: 1.375rem;
  }

  .page-container__content {
    grid-template-columns: auto;
    gap: 40px;

    margin-left: 24px;
    margin-right: 24px;

    width: 80vw;
  }
}

@media screen and (max-width: 375px) {
  h1 {
    font-size: 1.25rem;
    padding: 32px 24px 16px 24px;
  }

  .page-container__content {
    font-size: 0.9375rem;
    gap: 24px;
    width: auto;
  }
}
</style>
