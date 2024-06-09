<template>
  <router-view />
</template>

<script></script>

<style>

* {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
}

.text--bold {
  font-weight: 700;
}

.text--semi-bold {
  font-weight: 600;
}

.texc--italic {
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
</style>
