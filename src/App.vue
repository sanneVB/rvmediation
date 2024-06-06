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

.text {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings: "slnt" 0;
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
  /* font-variation-settings: "slnt" -10; */
  font-style: italic;
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
</style>
