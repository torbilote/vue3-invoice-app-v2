<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

/*
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
*/

body {
  overflow: hidden;
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-appearance: none;
  min-height: 130vh;
  height: 100%;
  width: 100vw;
  letter-spacing: -0.05em;
  background: -webkit-linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  background: linear-gradient(180deg, rgb(32, 88, 145), rgb(8, 39, 67));
  box-sizing: border-box;
}

// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,
// textarea:-webkit-autofill,
// textarea:-webkit-autofill:hover,
// textarea:-webkit-autofill:focus,
// select:-webkit-autofill,
// select:-webkit-autofill:hover,
// select:-webkit-autofill:focus {
//   border: 1px solid rgb(31, 41, 55);
//   -webkit-text-fill-color: #fff;
//   -webkit-box-shadow: 0 0 0px 10000px rgb(31, 41, 55) inset;
//   box-shadow: 0 0 0px 10000px rgb(31, 41, 55) inset;
// }
</style>
