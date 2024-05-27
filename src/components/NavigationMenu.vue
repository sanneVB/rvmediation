<template>
    <nav class="nav">
        <button @click="toggleNav" :class="{ 'nav__toggle--change': showNav }" class="nav__toggle">
            <div class="nav__bar"></div>
            <div class="nav__bar"></div>
            <div class="nav__bar"></div>
        </button>
        <div v-if="showNav" class="nav__list">
            <ul class="nav__ul">
                <li @click="closeNav" class="nav__item">
                    <router-link to="/" class="nav__link" active-class="active-link">Home</router-link>
                </li>
                <li @click="closeNav" class="nav__item">
                    <router-link to="/mediator" class="nav__link" active-class="active-link">Mediator</router-link>
                </li>
                <li @click="closeNav" class="nav__item">
                    <router-link to="/nmv" class="nav__link" active-class="active-link">NMV</router-link>
                </li>
                <li @click="closeNav" class="nav__item">
                    <router-link to="/contact" class="nav__link" active-class="active-link">Contact</router-link>
                </li>
                    <li @click="closeNav" class="nav__item">
                <router-link to="/privacystatement" class="nav__link" active-class="active-link">Privacystatement</router-link>
                </li>
                <li @click="closeNav" class="nav__item">
                    <router-link to="/algemenevoorwaarden" class="nav__link" active-class="active-link">Algemene Voorwaarden</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
  
<script>
    export default {
        data() {
            return {
            showNav: false,
            };
        },
        methods: {
            toggleNav() {
            this.showNav = !this.showNav;
            },
            closeNav() {
            this.showNav = false;
            },
        },
    };
</script>
  
<style scoped>

    .nav {
        position: sticky;
        top: 0; /* Plak de header aan de bovenkant van het scherm */
        background-color: #ffffff; /* achtergrondkleur toevoegen */
        z-index: 1000; /* Zorg ervoor dat de header boven andere elementen staat */
        width: 100%; /* Volledige breedte van het scherm */
    }

    .nav__toggle {
        height: 32px;
        width: 32px;
        border-radius: 4px;
        background-color: transparent;
        padding: 2px 3px;
    }

    .nav__bar {
        width: 22px;
        height: 2px;
        margin: 4px 0;
        transition: 0.2s;
        border-radius: 4px;
        background-color: #000;
    }

    .nav__toggle--change .nav__bar:nth-child(1) {
        transform: translateY(6px) rotate(-45deg);
    }

    .nav__toggle--change .nav__bar:nth-child(2) {
        opacity: 0;
    }

    .nav__toggle--change .nav__bar:nth-child(3) {
        transform: translateY(-6px) rotate(45deg);
    }

    /* .nav__ul {
        list-style: none;
        padding: 0;
        margin: 0;
    } */

    .nav__item {
        margin: 0;
    }

    .nav__link {
        text-decoration: none;
        color: #000;
    }

    .active-link {
        font-weight: bold;
        color: #f00;
    }
</style>
  