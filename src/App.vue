<template>
  <router-view />
</template>

<script>
    export default {
        name: "app",
        // set default background color
        created: function () {
            document.body.style.backgroundColor = "#FDFDFD";
        },
    };
</script>

<style>

* {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
}

ul {
    padding-left: 16px;
}

footer,
.page-container {
  margin-inline: auto;
  max-width: 1216px;
}

.footer-container,
.page-container__content,
.section-container {
  margin-inline: auto;
  max-width: 950px;
  width: 70vw;
}

.text--bold {
  font-weight: 700;
}

.text--semi-bold {
  font-weight: 600;
}

.text--medium-bold {
  font-weight: 500;
}

.text--italic {
  font-variation-settings: "slnt" -10;
}

.text__blue {
  color: #00AEB8;
}

.text__blue-bold {
  font-weight: 600;
  color: #00AEB8;
}

.footer__color {
  background-color: #00aeb8;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Remove default margin and padding */
* {
  margin: 0;
  padding: 0;
}

/* Improve media defaults */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Remove built-in form typography styles */
input,
button,
textarea,
select {
  font: inherit;
}

/* Avoid text overflows */
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* header styles */
h1 {
  text-align: center;
  font-size: 1.75rem;
  padding: 64px 32px 32px 32px;
}

h2 {
  font-size: 1.125rem;
  padding: 16px;
}

a {color: #00aeb8;}
a:hover, a:visited {color: #fb8c00};

</style>
