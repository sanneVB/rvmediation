<template>
    <HeaderContent></HeaderContent> 
    <h1>RVmediation is lid van NMv</h1>
    <div class="page-container">
        <div class="page-container__image">
            <a href="https://www.vindeenmediator.nl/mediator/rvmediation/" target="_blank">
                <img
                    class="grid-container__image--nmv-1"
                    src="../assets/rv-mediation-nmv-logo.png"
                    alt="logo van de nmv"
                />
            </a>
        </div>
        <div class="page-container__text">
            <p>
                Accumsan felis velit, tempus dui, vestibulum praesent torquent vitae arcu primis. Suscipit faucibus varius, erat inceptos, vulputate luctus hac nisl primis etiam aliquam. Sodales interdum dictum, porttitor ad, amet scelerisque netus pharetra malesuada sociosqu. Habitant donec fusce curabitur, sit hac curabitur, potenti commodo nostra platea varius lorem adipiscing. Mattis laoreet fames, odio himenaeos, class ad vulputate platea scelerisque nisl. Cubilia nulla, blandit elementum aenean nec.
            </p>
            <p>
                Sodales integer, neque rhoncus nulla. Commodo semper vulputate tincidunt, ipsum mauris aenean, per tempus aptent habitant duis vehicula nibh. Laoreet aliquet hac, et a, mollis conubia maecenas ultrices tellus urna. Vitae hac eros, interdum placerat odio nam. Amet risus pulvinar, aptent inceptos turpis phasellus. Condimentum tempus vulputate, eget vitae, hac accumsan turpis imperdiet blandit varius. Urna lacinia morbi, et auctor, nullam ornare dictumst lacus netus egestas turpis.
            </p>
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
        HeaderContent, FooterContent,
        },
    }
</script>
<style scoped>

    h1 {
        padding-right: 15vw;
        padding-left: 15vw;
    }

    img {
        width: 256px;
    }

    p {
        color: red;
    }

    .page-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
        margin-top: 40px;
        gap: 48px;
        padding-right: 15vw;
        padding-left: 15vw;
    }

    .page-container__image {
        justify-self: center;
    }

</style>