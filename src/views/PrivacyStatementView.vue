<template>
<HeaderContent></HeaderContent>
<div class="page-container page__minus-header-footer">
    <h1>Privacy statement</h1>
    <div class="page-container__content">
        <div>
            <h2>bla bla bla</h2>
            <p>Accumsan felis velit, tempus dui, vestibulum praesent torquent vitae arcu primis. Suscipit faucibus varius, erat inceptos, vulputate luctus hac nisl primis etiam aliquam. Sodales interdum dictum, porttitor ad, amet scelerisque netus pharetra malesuada sociosqu. Habitant donec fusce curabitur, sit hac curabitur, potenti commodo nostra platea varius lorem adipiscing. Mattis laoreet fames, odio himenaeos, class ad vulputate platea scelerisque nisl. Cubilia nulla, blandit elementum aenean nec.</p>

            <h2>bla bla bla</h2>
            <p>Sodales integer, neque rhoncus nulla. Commodo semper vulputate tincidunt, ipsum mauris aenean, per tempus aptent habitant duis vehicula nibh. Laoreet aliquet hac, et a, mollis conubia maecenas ultrices tellus urna. Vitae hac eros, interdum placerat odio nam. Amet risus pulvinar, aptent inceptos turpis phasellus. Condimentum tempus vulputate, eget vitae, hac accumsan turpis imperdiet blandit varius.</p>
        </div>
        <div>
            <h2>bla bla bla</h2>
            <p>Sodales integer, neque rhoncus nulla. Commodo semper vulputate tincidunt, ipsum mauris aenean, per tempus aptent habitant duis vehicula nibh. Laoreet aliquet hac, et a, mollis conubia maecenas ultrices tellus urna. Vitae hac eros, interdum placerat odio nam. Amet risus pulvinar, aptent inceptos turpis phasellus. Condimentum tempus vulputate, eget vitae, hac accumsan turpis imperdiet blandit varius. Urna lacinia morbi, et auctor, nullam ornare dictumst lacus netus egestas turpis.</p>

            <h2>bla bla bla</h2>
            <p>Sodales integer, neque rhoncus nulla. Commodo semper vulputate tincidunt, ipsum mauris aenean, per tempus aptent habitant duis vehicula nibh. Laoreet aliquet hac, et a, mollis conubia maecenas ultrices tellus urna. Vitae hac eros, interdum placerat odio nam. Amet risus pulvinar, aptent inceptos turpis phasellus.</p>
        </div>
    </div>
</div>
<FooterContent></FooterContent>
</template>
<script>
    import HeaderContent from '@/components/HeaderContent.vue';
    import FooterContent from '@/components/FooterContent.vue';

    export default {
        name: "TermsAndConditionsView",
        components: {
            HeaderContent, FooterContent
        },
        // change page background color to other color
        mounted: function () {
            document.body.style.backgroundColor = "#001526";
        },
    };

</script>
<style scoped>

* {
  color: #fff;
}

P {
    font-size: 0.875rem;
    color: red;
}

.page-container__content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 80px;
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

@media screen and (max-width: 375px) {
  .page-container__content {
    font-size: 0.9375rem;
    
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>