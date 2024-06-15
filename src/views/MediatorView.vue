<template>
<HeaderContent></HeaderContent>
<div class="page-container page__minus-header-footer">
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
            <p>Mediation is een vorm van conflictbemiddeling. De mediator begeleidt gesprekken, zodat u weer met elkaar in gesprek komt. Door mediation wordt u geholpen door een professionele en onafhankelijke mediator. De mediator zal er voor zorgen dat u op uw gemakt gesteld word en zorgt dat de communicatie weer op gang komt. Ook word het conflict in een breder perspectief geplaatst, zo werkt u naar een aanvaardbare oplossing voor beide partijen.</p>
            <p>Tijdens de mediation denkt en werkt u zelf mee aan een aanvaardbare oplossing. Hierdoor kunt u uiteindelijk zelf een overwogen beslissing nemen. Dit bespaart u een hoop negativiteit, maar ook voorkomt u hiermee een juridisch proces. Dit betekent minder hoge (juridische) kosten en er blijft veel tijd bespaart.</p>
        </div>
    </div>
</div>
<FooterContent></FooterContent>
</template>
<script>
    import HeaderContent from '@/components/HeaderContent.vue';
    import FooterContent from '@/components/FooterContent.vue';

    export default {
        name: "NmvView",
        components: {
        HeaderContent,
        FooterContent,
        },
    }
</script>
<style scoped>

.page-container__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    margin-top: 32px;
    margin-bottom: 32px;
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

.page__minus-header-footer {
    min-height: calc(100vh - 160px);
}

/* scroll snap will be activated for tables and smartphones */
@media screen and (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
      padding: 32px 32px 16px 32px;
    }

    .page__minus-header-footer {
        min-height: calc(100vh - 208px);
    }
}

</style>