<template>
  <div class="box-container">
      <p class="text--bold">Benieuwd geworden? Neem contact met mij op.</p>
      <a href="./contact" class="button__contact">Neem contact op</a>
  </div>
</template>
<script></script>
<style scoped>
a {
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #fff;
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
  background-color: #ff9900;
}

a.button__contact:active {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
}

.button__contact-position {
  text-align: center;
}

.box-container {
  border: 1px solid #bababa;
  border-radius: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
}

@media screen and (max-width: 768px) {
  * {
    font-size: 0.875rem;
  }
}
</style>