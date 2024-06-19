<template>
  <nav class="nav__menu">
    <div class="nav__button">        
      <button @click="toggleNav" :class="{ 'nav__toggle--change': showNav }" class="nav__toggle">
        <div class="nav__bar"></div>
        <div class="nav__bar"></div>
        <div class="nav__bar"></div>
      </button>
    </div>
    <div v-if="showNav" class="nav__list">
      <ul class="nav__ul">          
          <a href="./#landing">
            <li @click="closeNav" class="nav__item">Home</li>
          </a>
          <a href="./#introduction">
            <li @click="closeNav" class="nav__item">
              Bemiddelaar voor de logistieke sector
            </li>
          </a>
          <a href="./#employee">
            <li @click="closeNav" class="nav__item">
              Voor werknemers
            </li>
          </a>
          <a href="./#employer">
            <li @click="closeNav" class="nav__item">
              Voor werkgevers
            </li>
          </a>
          <a href="./#about-me">
            <li @click="closeNav" class="nav__item">
              Wie ben ik?
            </li>
          </a>
          <a href="./#testimonials">
            <li @click="closeNav" class="nav__item">
              Wat zeggen anderen?
            </li>
          </a>
      </ul>
      <div class="button__contact-position">
        <a href="./contact" class="button__contact">Neem contact op</a>
      </div>
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

li {
  list-style: none;
}
li:before {
  content: "• ";
  color: #fff;
}
li {
  display: block;
}
li:before {
  color: #fff;
}
li:hover:before {
  color: #001526;
}

a {
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #001526;
  }
}

a.button__contact {
  background-color: #fb8c00;
  border: 1px outset buttonborder;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  line-height: 2.5;
  padding: 8px 16px 8px 16px;
  text-align: center;
}

a.button__contact:hover {
  color: #FFF;
  background-color: #ff9900;
}

a.button__contact:active {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
}

.button__contact-position {
  text-align: center;
}

.nav__item {
  padding: 12px 0;
}

.nav__button {
/* button { */
  position: absolute;
  top: 24px;
  right: 56px;
}

.nav__toggle {
  position: absolute;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  border: 2px solid #FFF;
  background-color: transparent;
  padding: 2px 3px;
  z-index: 999;
}

.nav__toggle:hover {
  background-color: #fb8c00;
}

.nav__list {
  position: absolute;
  border-radius: 6px;
  background-color: #00AEB8;
  top: 10px;  
  right: 12px;
  padding: 100px 32px 64px 32px;
  box-shadow: 4px 6px 10px rgba(0, 0, 0, 0.25);
  animation: createBox 300ms;
}

@keyframes createBox {
  from {
    transform-origin: top right;
    transform: scale(0);
  }
  to {
    transform-origin: top right;
    transform: scale(1);
  }
}

.nav__ul {
  margin-bottom: 100px;
}

.nav__bar {
  width: 22px;
  height: 2px;
  margin: 4px 0;
  transition: 0.2s;
  border-radius: 4px;
  background-color: #fff;
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
</style>
