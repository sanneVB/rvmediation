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

.page-container {
  margin-inline: auto;
  max-width: 1216px;
}

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
h1,
h2,
h3,
h4,
h5,
h6 {
  text-align: center;
}

h1 {
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

p {
  padding-bottom: 0.5rem;
}

</style>
