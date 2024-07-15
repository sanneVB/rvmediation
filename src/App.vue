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

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: rgb(33, 33, 33);
}

.header-container,
.footer-container,
.page-container {
  margin-inline: auto;
  max-width: 1216px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrapper__content {
  flex: 1;
}

.page-container__content,
.section-container,
.box-container {
  margin-inline: auto;
  max-width: 950px;
  width: 70vw;
  justify-items: center;
}

.page-container__content,
.section-container {
  margin-top: 32px;
  margin-bottom: 32px;
}

.box-container {
  margin-top: 32px;
}

.text--bold {
  font-weight: 700;
}

.text--semibold {
  font-weight: 600;
}

.text--medium {
  font-weight: 500;
}

.text--light {
  font-weight: 300;
}

.text--italic {
  font-variation-settings: "slnt" -10;
}

.text__blue {
  color: #00aeb8;
}

.text__blue-bold {
  font-weight: 600;
  color: #00aeb8;
}

.text__align-right {
  text-align: right;
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
  font-size: 1.5rem;
  padding: 32px 32px 32px 32px;
}

h2 {
  font-size: 1.125rem;
  padding: 16px 0px 24px 0px;
}

a {
  color: #00aeb8;
}
a:hover,
a:visited {
  color: #fb8c00;
}

p {
  hyphens: auto;
}
</style>
